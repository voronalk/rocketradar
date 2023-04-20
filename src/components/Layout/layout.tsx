import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Willy Wonka";
export const siteTitle = "Rocket Radar";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href={"/"} className={styles.headerButton}>
          <div >Home</div>
        </Link>
        <Link href={"/missions"} className={styles.headerButton}>
          <div >Missions</div>
        </Link>
        <Link href={"/rockets"} className={styles.headerButton}>
          <div >Rockets</div>
        </Link>
        <Link href={"/providers"} className={styles.headerButton}>
          <div >Providers</div>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer><h1>This website is currently under develpment, many features may not work as intended</h1></footer>
    </div>
  );
}
