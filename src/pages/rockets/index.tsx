import Layout from "@/components/Layout/layout";
import MissionSummary from "@/components/MissionSummary/missionSummary";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getAllMissionsIds, getSortedPostsData } from "../../lib/posts";
import { getLaunchData } from "@/lib/launches";
import { Launch } from "@/lib/interface";
import Link from "next/link";
import Image from "next/image";

interface Props {
  date: string;
  title: string;
  id: string;
}

export async function getStaticProps() {
  const response = getSortedPostsData("rockets");
  return {
    props: {
      response: response,
    },
  };
}

export default function Post({ response }: { response: Props[] }) {
  return (
    <Layout>
      <Head>
        <title>Rockets</title>
      </Head>
      <div className={utilStyles.rocketsContainer}>
        {response.map(({ date, title, id }) => (
          <Link href={`/rockets/${id}`} className={utilStyles.rocketContainter} key={id}>
            <Image
              className={utilStyles.rocketPic}
              src={`/images/${id}.jpg`}
              alt="h"
              width={220}
              height={330}
            />
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
