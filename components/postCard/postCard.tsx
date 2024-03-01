import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {/* <Image src={post.img} alt="" fill className={styles.img}/> */}
          이미지
        </div>
        <span className={styles.date}>2024-03-02</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>타이틀</h1>
        <p className={styles.desc}>바디</p>
        <Link className={styles.link} href={`/blog/1`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard