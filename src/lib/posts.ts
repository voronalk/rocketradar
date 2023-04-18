import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "articles");

export function getSortedPostsData(folder: string) {
  const postsDirectory = path.join(articlesDirectory, folder);
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(folder: string) {
  const fullPath = path.join(articlesDirectory, folder);
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.(md|json)$/i, ""),
      },
    };
  });
}

export function getAllMissionsIds() {
  const fullPath = path.join(process.cwd(), "missions");
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.(md|json)$/i, ""),
      },
    };
  });
}

export async function getPostData(slug: string, folder: string) {
  const subDirectoryPath = path.join(articlesDirectory, folder);
  const fullPath = path.join(subDirectoryPath, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  try {
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
      slug,
      contentHtml,
      ...(matterResult.data as { date: string; title: string }),
    };
  } catch {
    console.log("nope");
    return {
      slug,
      contentHtml: "nothing yet",
    };
  }
}
