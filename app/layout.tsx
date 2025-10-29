import "./globals.css";
import { ReactNode } from "react";
import Header from "./Header";

export const metadata = {
  title: "Blog Local Next.js",
  description: "Blog moderno usando JSON local e Server Components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
