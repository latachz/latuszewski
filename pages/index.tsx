import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latuszewski</title>
      </Head>
      <nav className={styles.nav}>
        <a href="https://www.linkedin.com/in/kacper-latuszewski" target="_blank" rel="noreferrer">About</a>
        <a href="https://github.com/latachz" target="_blank" rel="noreferrer">Github</a>
        <a href="https://appunite.com/blog/author/kacper-latuszewski" target="_blank" rel="noreferrer">Blog</a>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
        <span className={styles.backgroundLogo}>{'|>'}</span>Latuszewski
        </h1>
        <p className={styles.description}>Software Engineer at <a href="https://appunite.com/" target="_blank" rel="noreferrer">@appunite</a> and Elixir zealot.</p>
      </main>
    </div>
  )
}

export default Home
