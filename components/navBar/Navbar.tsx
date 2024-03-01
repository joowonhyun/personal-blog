import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.container}>
    <Link href="/" className={styles.logo}>
      로고
    </Link>
    <div>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
    </div>
  </nav>
  )
}

export default Navbar