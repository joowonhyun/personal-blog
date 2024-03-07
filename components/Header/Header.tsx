'use client'
import Link from "next/link";
import styles from "./Header.module.css";
import Nav from "../NavBar/NavBar";
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname();
  return (
    <header className={styles.container}>
      <div>
        <Link aria-current="page" href="/">
          <h1 className={styles.logo}>
            Joowon Log
            <span>,</span>
          </h1>
        </Link>
      </div>
      <Nav path={path}/>
    </header>
  );
};

export default Header;
