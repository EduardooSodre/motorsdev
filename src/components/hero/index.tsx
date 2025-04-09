import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}

export function Hero({
  heading,
  buttonTitle,
  buttonUrl,
  bannerUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          quality={100}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1400px) 75vw, 60vw"
        />
      </div>
    </main>
  );
}
