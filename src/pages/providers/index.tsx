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
        <title>Providers</title>
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
          accumsan enim. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Culpa, facere, minus sed provident quos sunt id expedita quae
          fuga sequi quibusdam molestias! Blanditiis soluta delectus itaque cum!
          Nam, beatae natus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque error illo architecto rerum, eaque itaque iure fuga.
          Architecto neque perferendis in doloremque incidunt facere, ipsam
          voluptatem, eius illum debitis est. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate dolorum sint veniam nihil
          nostrum esse? Officiis perspiciatis dolorem natus nemo, labore
          assumenda. Aliquam consectetur libero accusamus numquam temporibus eos
          magnam? Eius impedit ipsa dolorum non cupiditate consequuntur nisi
          repudiandae ipsum porro illo sed aut iste sunt magni voluptate beatae
          a exercitationem rem minima tempora maiores quis, unde aperiam nemo.
          Aperiam! Vitae rerum odit voluptas optio voluptatibus quisquam totam
          vero autem quibusdam veniam maxime reiciendis distinctio veritatis
          voluptates qui similique officia saepe, quia nulla mollitia
          dignissimos hic. Dignissimos consequuntur beatae expedita. Debitis
          accusantium, ullam ipsa fugiat et totam est, qui dolorum ab placeat ea
          cum explicabo magni, cupiditate molestias incidunt molestiae!
          Molestias hic architecto explicabo sed, vel facere magnam esse nisi.
          Minima, dicta? Perspiciatis sit dolorem distinctio, ipsa corrupti
          officia placeat nostrum quam? Hic inventore vero corporis totam id!
          Eos quaerat sit possimus odit hic? Totam labore veniam quaerat dolor
          sit. Enim libero id a totam modi vero sequi quibusdam nesciunt error
          incidunt ea officia, debitis nobis aperiam suscipit odit! Vel
          consequuntur culpa itaque optio deleniti eaque natus dicta ratione
          neque! Rerum perspiciatis recusandae incidunt ad ducimus dolorum qui a
          eligendi itaque, illo alias delectus? Pariatur repudiandae voluptate
          commodi libero repellat! In corrupti maxime repudiandae, esse pariatur
          repellendus et modi accusantium. Dolor, magnam veniam autem odio
          quisquam eum eos, incidunt quas sequi eius ratione placeat corporis ab
          quos. Numquam, ea soluta tenetur saepe minus eaque fugiat et dolorum
          earum harum error. Similique quibusdam repellendus soluta praesentium,
          quisquam error corrupti quod assumenda nobis possimus reiciendis nihil
          culpa quas. Explicabo quis accusantium doloremque maxime qui facere
          sunt blanditiis. Laudantium quisquam enim maiores magnam. Deleniti
          exercitationem vel alias libero nulla illum inventore nisi explicabo
          minus sequi, deserunt unde obcaecati illo consequatur consequuntur
          aliquid natus tempora itaque quasi voluptatum earum repudiandae
          sapiente aperiam. Reprehenderit, asperiores.
        </article>
        {/* <MissionSummary launch={launch}></MissionSummary> */}
      </section>
    </Layout>
  );
}
