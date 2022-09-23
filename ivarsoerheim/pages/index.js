import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ivar Sørheim</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
        Hello. My name is Ivar.
        </h1>
      </main>
    </div>
  )
}