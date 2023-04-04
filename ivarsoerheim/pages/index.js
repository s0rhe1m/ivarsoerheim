import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Ivar Sørheim</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello. My name is Ivar Sørheim
        </h1>
      </main>

      <footer className={styles.footer}>
      <ul>
    <li><a href="https://www.linkedin.com/in/ivar-lj-s-b8739457/">Linkedin</a></li>
    <li><a href="https://github.com/s0rhe1m">Github</a></li>
      </ul> 
      </footer>
    </div>
  )
}
