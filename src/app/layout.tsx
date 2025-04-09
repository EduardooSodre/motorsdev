import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotorsMotors - Sua oficina especializada",
  description: "Oficina de carros em Limeira",
  keywords: ["oficina", "oficina de carros", "carros", "manutenção de carros"],
  openGraph: {
    title: "MotorsMotors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_API_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}

        <p
          style={{
            textAlign: "center",
            marginTop: 60,
            marginBottom: 24,
          }}>
          Todos direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
