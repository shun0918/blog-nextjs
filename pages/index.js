import Head from 'next/head'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../lib/contentful/contentful'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const allPosts = await getAllPosts()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <div className={`${styles.container} ${styles["container-bg"]}`}>
      <Head>
        <title>Web developer blog | kabosu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.length > 0
          ? posts.map((p) => (
              <PostCard
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
    </div>
  )
}
