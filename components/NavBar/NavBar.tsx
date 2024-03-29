"use client"

import {useRouter} from 'next/navigation'
import styles from "./NavBar.module.css";
import Link from "next/link";
import Mode from "./_component/Mode";

interface Path {
  path: string;
}

const navList = ["about", "posts"];

const Nav = ({ path }: Path) => {
  let router = useRouter();
  return (
    <nav>
      <ul className={styles.list}>
        {navList.map((el) => (
          <li
            className={el === path.split("/")[1] ? styles.active : ""}
            key={el}
          >
          <Link href={`/${el}`}>{el.toUpperCase()}</Link>
          </li>
        ))}
        <li>
          <Link href="https://github.com/joowonhyun" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
        </li>
        <Mode/>
      </ul>
    </nav>
  );
};

export default Nav;
