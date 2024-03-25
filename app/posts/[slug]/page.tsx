import { promises as fs } from 'fs';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import styles from "./post.module.css";
import CodeBlock from "@/posts/markdown/CodeBlock";

const getPostContent = async (slug: string) => {
  const file = `/posts/${slug}.md`;
  const content = await fs.readFile(process.cwd() + file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getPostContent(slug);

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