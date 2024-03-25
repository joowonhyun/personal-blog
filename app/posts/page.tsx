import styles from "./posts.module.css";
import getPostMetadata from "../../components/Post/getPostMetadata";
import PostPreview from '../../components/Post/previewPost';

const HomePage = async () => {
const postMetadata = await getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.items}>test</div>
    </div>
  );
};

export default HomePage;
