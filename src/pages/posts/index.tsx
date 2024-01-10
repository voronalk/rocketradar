import Layout from "@/components/Layout/layout";
import MissionSummary from "@/components/MissionSummary/missionSummary";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { getAllMissionsIds } from "../../lib/posts";
import { getLaunchData } from "@/lib/launches";
import { Launch } from "@/lib/interface";
import Link from "next/link";

interface Props {
  slug: string;
}

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Posts`</title>
      </Head>
      <section className={utilStyles.flexInline}>
        <article>
          {/* <h1 className={utilStyles.headingXl}>{launch.name}</h1> */}
          <div className={utilStyles.lightText}></div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis
          odio ac dui lobortis placerat. Curabitur consectetur lacus a justo
          egestas scelerisque. Donec magna mi, gravida id malesuada sed,
          condimentum et nisl. Suspendisse finibus nulla eget consectetur porta.
          Vestibulum ut ex libero. Integer ac leo a velit rhoncus ultrices.
          Nulla elementum est eget ipsum luctus ultrices ac in sapien. Vivamus
          aliquam dui in facilisis tempor. Curabitur ut libero tellus. Quisque
          ut magna purus. Morbi massa nunc, ornare a tellus nec, commodo
          volutpat dui. Fusce in consectetur dui, eu venenatis nisl. Etiam
          blandit interdum fringilla. Donec mollis aliquet mi, ut consequat erat
          consequat ac. Vivamus varius neque quis sapien pharetra tristique.
          Duis nibh dui, tincidunt a mi imperdiet, pharetra rutrum metus. Proin
          pretium neque eget ex placerat, at porta mi viverra. Duis eget erat
          eget leo placerat facilisis. Nullam aliquet erat eget nisi elementum
          luctus. Nulla dolor massa, tempus at scelerisque at, sagittis et
          tellus. Quisque faucibus venenatis viverra. Nulla iaculis felis nec
          tellus gravida, eu bibendum enim auctor. Pellentesque sed maximus
          metus, a consequat justo. Etiam condimentum fermentum volutpat. Aenean
          purus justo, sagittis sit amet sollicitudin nec, pretium a urna. Nam
          justo odio, pretium eu eros nec, fringilla sodales leo. Praesent
          blandit in eros ut hendrerit. Morbi ut iaculis est. Nulla pretium
          tempus sem. Sed ut odio scelerisque, venenatis arcu sed, accumsan
          nibh. Suspendisse et nulla vitae ex iaculis dictum. Cras et faucibus
          orci, vitae cursus libero. Integer in leo mattis orci mattis ultrices
          et vitae nibh. Donec venenatis purus eu lectus porta tristique.
          Integer sodales laoreet dolor, quis sollicitudin quam consectetur nec.
          Mauris lobortis vestibulum libero at hendrerit. Integer sollicitudin
          ut justo non vehicula. In in rutrum erat. Vestibulum consequat turpis
          nec nisi consequat vehicula. In tincidunt lobortis mauris eget
          convallis. Vivamus tempus lacus eget consequat elementum. Pellentesque
          mauris magna, ultricies a eros sit amet, volutpat volutpat enim. Cras
          ut egestas nisi, eget iaculis nisi. Quisque nec ipsum a purus
          vulputate hendrerit at eu tortor. Sed suscipit fringilla urna, vel
          porta eros convallis nec. Praesent et dui lectus. Nulla quam tortor,
          tristique in erat id, sagittis ultricies nulla. In rutrum lectus at
          nibh posuere ornare. Sed ultrices dignissim risus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Morbi et metus gravida, tincidunt ligula faucibus,
          accumsan enim.
        </article>
        {/* <MissionSummary launch={launch}></MissionSummary> */}
      </section>
    </Layout>
  );
}
