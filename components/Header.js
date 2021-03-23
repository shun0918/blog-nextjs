import { useState } from "react"
import Link from 'next/link'

function Header() {
  return(
    <header className="header">     
      <div className="grobal-nav">
        <div className="grobal-nav__inner">
          <Link href="/">
            <a className="grobal-nav__logo--link">
              <h1 className="grobal-nav__logo">Shun Bibo Roku</h1>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .grobal-nav {
            background: #F4E2CA;
            box-shadow:  9px 9px 30px #c8b9a6,
                        -9px -9px 30px #ffffee;
            position: fixed;
            top:0;
            left:0;
            z-index:1000;
            width: 100%;
          }
          .grobal-nav__inner {
            align-items: center;
            display: flex;
            justify-content: flex-start;
            position: relative;
            height: 50px;
          }
          .grobal-nav__logo {
            left: 50%;
            top: 50%;
            margin:0;
            position: absolute;
            transform: translate(-50%, -50%);
            font-family: 'Century Gothic', sans-serif;
            font-size: 20px;
            color: #555;
          }
          .grobal-nav__logo--link {
            display: block;
          }
        `}</style>
      </div>
    </header>
  )
}

export default Header