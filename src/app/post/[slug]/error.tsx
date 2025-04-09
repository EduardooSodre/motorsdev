"use client";

import Link from "next/link";
import styles from "./error.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>Ops! Essa página não existe.</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}  