import styles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

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
      <Header></Header>
      <div className={styles.stars}></div>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
