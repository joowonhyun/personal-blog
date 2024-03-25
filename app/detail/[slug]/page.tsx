import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import styles from "./post.module.css";
import CodeBlock from "../../../lists/markdown/CodeBlock";


const getPostContent = async (slug: string) => {
  const folder = 'lists';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file,"utf-8");
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