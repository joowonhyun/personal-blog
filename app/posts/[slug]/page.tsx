import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/Post/getPostMetadata";
import styles from "./post.module.css";
import CodeBlock from "@/posts/markdown/CodeBlock";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.data.title}</h1>
      <p className={styles.date}>{post.data.date}</p>
      <article>
        <Markdown
          className={styles.content}
          options={{
            overrides: {
              code: CodeBlock,
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
};

export default PostPage;