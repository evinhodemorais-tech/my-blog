import { fetchArtigosLocal } from "@/lib/artigos";
import Link from "next/link";
import styles from "./Home.module.css";

export default async function Home() {
  const artigos = await fetchArtigosLocal();

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Artigos Recentes</h1>
      <div className={styles.grid}>
        {artigos.map((artigo) => (
          <Link
            key={artigo.slug}
            href={`/artigos/${artigo.slug}`}
            className={styles.card}
          >
            <h2>{artigo.titulo}</h2>
            <p>{artigo.conteudo.slice(0, 100)}...</p>
            <span>Por {artigo.autor} | {artigo.data}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
