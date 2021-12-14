import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latuszewski</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My name is Kacper Latuszewski. I'm a student. In love with functional programming |> Elixir, Erlang. I also create a frontend in React."></meta>
        <meta name="author" content="Kacper Latuszewski" />
        <meta name="keywords" content="latuszewski, kacper, latuszewski, kacper latuszewski, developer, server-side, backend, functional programming, programming, web development, elixir, phoenix, erlang, react" />
        <meta property="og:title" content="Kacper Latuszewski" />
        <meta property="og:description" 
          content="My name is Kacper Latuszewski. I'm a student. In love with functional programming |> Elixir, Erlang. Mostly writing backend but I also create a frontend in React." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latuszewski.pl" />

        <link rel="icon" href="/favicon.ico" />
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
