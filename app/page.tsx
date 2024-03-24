/* eslint-disable react/no-unescaped-entities */
import Banner from "../components/Banner/Banner";
import styles from "./main.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div>
          <Banner/>
          <p className={styles.subTitle}>I'm working Frontend Developer 🚀</p>
        </div>
      </div>
    </main>
  );
}
