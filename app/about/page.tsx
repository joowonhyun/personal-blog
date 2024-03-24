import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>About Me</p>
      <p className={styles.intro}>
        비즈니스에 공감하고 주도적으로 개발하기 위해<br className={styles.mo_only} /> 노력하는
        <br className={styles.pc_only} /> 프론트엔드 개발자 현주원입니다.
      </p>
      <p className={styles.detailed}>
        저는 혼자 빨리 가기 보다 함께 멀리 가고 싶은 개발자입니다. <br />
        개발 중 마주친 문제를 해결하기 위해 끈질기게 노력하며, 문제를 해결했을
        때 쾌감을 즐깁니다.
        <br />
        사용자에게 편리하고 즐거운 경험을 제공할 수 있는 완성도 높은 개발을 위해
        <br className={styles.pc_only} /> 기술 스택을 늘리고, 레벨을 높이기 위해 공부하며, 이 과정에서 알게 된
        정보를 공유하기 위해 노력하고 있습니다.
        <br />
      </p>
      <main>
        <h2 className={styles.highlight}>
          <span>👨🏻‍💻</span> I&apos;ve worked at
        </h2>
        <ul className={styles.divide}>
          <li className={styles.active}>
            <div className={styles.items}>
              <h3 className={styles.corp}>D.SHARE</h3>
              <p>Web Frontend Developer <span className={styles.date}>| 2022.08 - Now</span></p>
            </div>
          </li>
          <li>
            <div className={styles.items}>
              <h3>D.SHARE</h3>
              <p>
                Business planning, Operation, Marketing .etc <span className={styles.date}>| 2017.04 - 2022.08</span>
              </p>
            </div>
          </li>
        </ul>
        <h2 className={styles.highlight}>
          <span>🔧</span> Skilled
        </h2>
        <ul className={styles.skill}>
          <li>JavaScript, TypeScript, React.js, Next.js, HTML/CSS, MySQL</li>
        </ul>
      </main>
    </div>
  );
};

export default About;