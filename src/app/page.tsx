'use client'
import Logo from '@/Components/Logo'
import Banner from '@/Components/banner'
import Image from 'next/image'
import styles from './../styles/login.module.scss'
import { useRouter } from 'next/navigation'

export default function Home() {

  let router =useRouter()
function handleSubmit(e:any){
  e.preventDefault()
  router.push('/users')
  // router.redirect('/users')
}

  return (

    <main className={styles.body}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
      </header>
      <section className={styles.wrapperbody}>
        <div className={styles.imgad}>
          <Banner />
        </div>
        <div className={styles.login}>
          <div className={styles.loginwrapper}>

          <div className={styles.formheader}>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>
          <form className={styles.form} >
            <div className={styles.emailwrapper}>
              <input type="email" required placeholder='Email' name="" id="" />
            </div>
            <div className={styles.passwordwrapper}>
              <input required placeholder='Password' type="password"  name="" id="" />
              <button>SHOW</button>
            </div>
            <a href='/' className={styles.password}>FORGOT PASSWORD?</a>
            <div className={styles.buttonwrapper}><button onClick={handleSubmit} className={styles.loginbutton}>LOG IN</button></div>
          </form>
          </div>
        </div>
      </section>
    </main>
  )
}
