'use client'
import React, { useContext, useState } from 'react'
import Logo from './Logo'
import styles from './../styles/header.module.scss'
import SearchIcon from './SearchIcon'
import NotifIcon from './NotifIcon'
import DropDownCaret from './DropDownCaret'
import { useMyContext } from './SidebarContext'
import Link from 'next/link'



export default function Header() {

  const [nav,setNav]=useState(false)
  const {docked,setDocked}=useMyContext()

  console.log(docked,'check one two')
  

  function handleToggle(){
    setDocked(!docked)
  }

  function handleNavToggle(){
    setNav(!nav)
  }

  return (
   

    <header className={styles.headernav}>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <div onClick={handleToggle}  className={styles.hamburger}>
              <span></span><span></span><span></span>
            </div>
            <Link href='/users'>
            <Logo/>
            </Link>
          </div>

            {/* <div className={styles.hamburger}>
              <span></span><span></span><span></span>
            </div> */}
          {/* <div className={styles.headwrapper}> */}

          <div className={styles.search}>
            <input placeholder='Search for anything' type="text" name="" className={styles.searchbar} id="" />
            <button className={styles.searchbutton}><SearchIcon/></button>
          </div>
          <div onClick={handleNavToggle}   className={`${styles.hamburger} `}>
              <span></span><span></span><span></span>
            </div>
          <nav className={`${styles.navwrapper} ${nav? styles.mobiledisplay:styles.nonmobiledisplay}`}>
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
