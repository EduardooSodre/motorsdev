// pages/post/[slug].tsx  
import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next/types";
import { redirect } from "next/navigation";

interface PageParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const data: PostProps = await getItemBySlug(slug);

    if (!data) {
      redirect('/'); // Redireciona para a página de erro se o post não for encontrado  
    }

    const { objects } = data;

    return {
      title: `MotorsMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ["motorsdev", "troca de oleo", "motorsdev troca de oleo"],
      openGraph: {
        title: `MotorsMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      title: "MotorsMotors - Erro de Carregamento",
      description: "Erro ao carregar os dados do post.",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Buscando dados  
  const data: PostProps = await getItemBySlug(slug);

  if (!data) {
    redirect('/'); // Redireciona para a página de erro  
  }

  const { objects } = data;

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={18} color="#FFF" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p className={styles.text}>
              {objects[0].metadata.description.text}
            </p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              priority={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1400px) 75vw, 60vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}  