import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import DateTime from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getRecentLaunches, devGetRecentLaunches } from "@/lib/launches";
import { RocketAPIResponse } from "@/lib/interface";

export async function getStaticProps() {
  // const response = await getRecentLaunches();
  const response = devGetRecentLaunches();
  return {
    props: {
      response: response,
    },
  };
}

export default function Home({ response }: { response: RocketAPIResponse }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Rocket Radar</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Next five launches:</h2>
        <ul className={utilStyles.list}>
          {response.result.map((launch) => (
            <li className={utilStyles.listItem} key={launch.id}>
              <Link href={`/missions/${launch.slug}`}>
                {`${launch.name}`}
                <br />
              </Link>
              <Link href={`/providers/${launch.provider.slug}`}>
                {launch.provider.name + " "}
              </Link>
              :
              <Link href={`/rockets/${launch.vehicle.slug}`}>
                {" " + launch.vehicle.name}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateTime seconds={parseInt(launch.sort_date)} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
