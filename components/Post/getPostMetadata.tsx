import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = `${process.env.NEXT_PUBLIC_FILE_NAME}/`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${process.env.NEXT_PUBLIC_FILE_NAME}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  // 날짜 순으로 정렬
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

};

export default getPostMetadata;