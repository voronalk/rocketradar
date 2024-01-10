import Layout from "@/components/Layout/layout";
import MissionSummary from "@/components/MissionSummary/missionSummary";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getAllMissionsIds, getSortedPostsData } from "../../lib/posts";
import { getLaunchData } from "@/lib/launches";
import { Launch } from "@/lib/interface";
import Link from "next/link";

interface Props {
  response: {
    params: {
      slug: string;
    };
  }[];
}

export async function getStaticProps() {
  const response = getAllMissionsIds();
  return {
    props: {
      response: response,
    },
  };
}

export default function Post({ response }: Props) {
  return (
    <Layout>
      <Head>
        <title>Missions</title>
      </Head>
      <section className={utilStyles.flexInline}>
        <article>
          {/* <h1 className={utilStyles.headingXl}>{launch.name}</h1> */}
          <div className={utilStyles.missionContainer}>
            {response.map(({ params }) => {
              return (
                <Link
                  key={params.slug}
                  href={`/missions/${params.slug}`}
                  className={utilStyles.missionLink}
                >
                  {params.slug}
                </Link>
              );
            })}
          </div>
        </article>
        {/* <MissionSummary launch={launch}></MissionSummary> */}
      </section>
    </Layout>
  );
}
