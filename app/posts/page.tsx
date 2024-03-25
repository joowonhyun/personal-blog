import styles from "./posts.module.css";
import getPostMetadata from "../../components/Post/getPostMetadata";
import PostPreview from '../../components/Post/previewPost';

export const dynamic = 'force-dynamic'

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.items}>{postPreviews}</div>
    </div>
  );
};

export default HomePage;