import Head from 'next/head'
import { useEffect, useState } from 'react'
import Post from '../components/post'
import styles from '../styles/Home.module.css'
import ContentfulCreateClient from './api/ContentfulCreateClient.js'

const client = ContentfulCreateClient();

export default function Home() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])
  
  return (
    <div className={`${styles.container} ${styles["container-bg"]}`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.length > 0
          ? posts.map((p) => (
              <Post
                key={p.fields.title}
                thumbnail={p.fields.thumbnail}
                title={p.fields.title}
                slug={p.fields.slug}
                publishedAt={p.fields.publishedAt}
                updatedAt={p.fields.updatedAt}
              />
            ))
          : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
