import Link from "next/link";
import styles from './PostPreview.module.css'

interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}
const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <p className={styles.date}>{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className={styles.title}>{props.title}</h2>
      </Link>
      <p className={styles.subTitle}>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;