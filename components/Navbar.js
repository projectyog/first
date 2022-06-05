import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'


function Navbar() {
  return (
    <nav className={styles.mainnav}>
    <ul>
     <Link href="/"><a><li>Home</li></a></Link>
      <Link href="/about"><a><li>About</li></a></Link>
      <Link href="/blog"><a><li>Blogs</li></a></Link>
      <Link href="/contact"><a><li>Contacts</li></a></Link>
    </ul>
 </nav>
  )
}

export default Navbar