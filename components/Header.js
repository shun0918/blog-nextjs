import { useState } from "react"
import Link from 'next/link'
import styles from "../styles/components/Header.module.scss"

function Header() {
  return(
    <header className={styles.header}>     
      <div className={styles["grobal-nav"]}>
        <div className={styles["grobal-nav__inner"]}>
          <Link href="/">
            <a className={styles["grobalnav__logo--link"]}>
              <h1 className={styles["grobal-nav__logo"]}>Shun Bibo Roku</h1>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header