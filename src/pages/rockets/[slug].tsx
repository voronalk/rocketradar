import path from "path";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import DateTime from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface Props {
  slug: string;
}

export async function getStaticProps({ params }: { params: Props }) {
  const postData = await getPostData(params.slug, "rockets");
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds("rockets");
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* <DateTime seconds={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
