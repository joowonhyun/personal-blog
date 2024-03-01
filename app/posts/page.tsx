import styles from "./posts.module.css";
import getPostMetadata from "@/components/post/getPostMetadata";
import PostPreview from "@/components/post/PostPreview";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));
  
    return (
      <div>{postPreviews}</div>
    );
  };
  
  export default HomePage;