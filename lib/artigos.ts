import fs from "fs";
import path from "path";
import slugify from "slugify";

export type Artigo = {
  titulo: string;
  autor: string;
  data: string;
  conteudo: string;
  slug: string;
};

// Buscar todos os artigos do JSON
export async function fetchArtigosLocal(): Promise<Artigo[]> {
  const filePath = path.join(process.cwd(), "data", "artigos.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const artigos = JSON.parse(jsonData) as Array<Omit<Artigo, "slug">>;

  return artigos.map(function (a): Artigo {
    return ({
      ...a,
      slug: slugify(a.titulo, { lower: true, strict: true }),
    });
  });
}

// Buscar um artigo por slug
export async function fetchArtigoPorSlug(slug: string): Promise<Artigo | null> {
  const artigos = await fetchArtigosLocal();
  return artigos.find((a) => a.slug === slug) || null;
}
