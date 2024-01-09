import React from 'react'
import Logo from './Logo'
import styles from './../styles/header.module.scss'
import SearchIcon from './SearchIcon'
import NotifIcon from './NotifIcon'
import DropDownCaret from './DropDownCaret'

export default function Header() {
  return (
    <header className={styles.headernav}>
        <div className={styles.navigation}>
          <div className="logo">
            <Logo/>
          </div>

            {/* <div className={styles.hamburger}>
              <span></span><span></span><span></span>
            </div> */}
          {/* <div className={styles.headwrapper}> */}

          <div className={styles.search}>
            <input placeholder='Search for anything' type="text" name="" className={styles.searchbar} id="" />
            <button className={styles.searchbutton}><SearchIcon/></button>
          </div>
          <nav className={styles.navwrapper}>
            <ul className={styles.items}>
              <li className={styles.doc}>Docs</li>
              <li><NotifIcon/></li>
              <li className={styles.profile}><span className={styles.display}>A</span><span className={styles.name}>Adedeji</span><span className={styles.caret}><DropDownCaret/></span></li>
            </ul>
          </nav>
          {/* </div> */}
        </div>
    </header> 
  )
}
