import { fetchArtigoPorSlug, fetchArtigosLocal } from "@/lib/artigos";
import { notFound } from "next/navigation";
import styles from "./Artigo.module.css";

type Props = { params: { slug: string } };

// SEO dinâmico
export async function generateMetadata({ params }: Props) {
  const artigo = await fetchArtigoPorSlug(params.slug);
  if (!artigo) return { title: "Artigo não encontrado", description: "" };

  return {
    title: artigo.titulo,
    description: artigo.conteudo.slice(0, 120),
  };
}

// Rotas dinâmicas (SSG)
export async function generateStaticParams() {
  const artigos = await fetchArtigosLocal();
  return artigos.map((a) => ({ slug: a.slug }));
}

// Página do artigo
export default async function ArtigoPage({ params }: Props) {
  const artigo = await fetchArtigoPorSlug(params.slug);

  if (!artigo) {
    return (
      <div className={styles.container}>
        <h1>Artigo não encontrado 😢</h1>
        <p>O artigo que você tentou acessar não existe.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{artigo.titulo}</h1>
      <p className={styles.info}>
        Por {artigo.autor} | {artigo.data}
      </p>
      <div className={styles.conteudo}>{artigo.conteudo}</div>
    </div>
  );
}
