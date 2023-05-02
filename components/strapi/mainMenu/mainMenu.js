import Link from 'next/link'
import { useState } from 'react'
import styles from './mainMenu.module.scss'
import Image from 'next/image'

export default function mainMenu({ menuItems }) {
  
  const data = menuItems;
  console.log("??")
    console.log(menuItems)

  return (
    <>
    <header>
        <nav data-test="nav">
          <div className="header-bar" data-test="header-bar">
            <div className="main-nav-content">
              <Link key="Main_Logo" href="#">
                <div className="logo" data-test="gl-logo">
                  <Image
                    src="/img/2022/11/logo.svg"
                    alt="Gorilla Logic's Logo"
                    layout="fill"
                  />
                </div>
              </Link>

              {/* //Desktop menu */}
              <div className={styles.desktopmenu} data-test="desktop-menu">
        <ul role="list" >
          {menuItems?.data.map((id,menuItem) => (
            <>
            {console.log(id.attributes.title)}
            <li
             key={menuItem}
              className={styles.menuItem}
              data-test={menuItem.id}
            >
              <div className={styles.topLevelHeader}>{id.attributes.title}</div>

              
            </li>
            </>
          ))}

          <li className={styles.menuItem}>
            <div className={styles.talkToAnExpertLayer}>
              <div className={styles.talkToAnExpert}>
                <Link legacyBehavior
                  aria-label="Talk to an expert"
                  href={`/contact-us`}
                >
                  <a aria-label="Talk to an expert">
                    <div className={styles.circle} data-test="talk-to-expert">
                      <span
                        className={styles.talkToExpertText}
                        data-test="talk-to-expert-text"
                      >
                        TALK TO AN EXPERT
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>

            </div>
            
          </div>
        </nav>
      </header>
      
    </>
  )
}
