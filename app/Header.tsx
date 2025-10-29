import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meu Blog</div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
      </nav>
    </header>
  );
}
