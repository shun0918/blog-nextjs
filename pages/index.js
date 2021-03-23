import Head from 'next/head'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { fetchAllPosts } from '../lib/contentful/contentful'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchAllPosts()
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
      
      <Header />

      <main className={styles.main}>
        <h1 className="main__title">記事一覧</h1>
        <div className="main__list">
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
        </div>
        <style jsx>{`
          .main__title {
            text-align: center;
            font-size: 24px;
            padding: 3rem 0;
          }
          .main__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 2rem;
            column-gap: 2rem;
            grid-row-gap: 3rem;
            row-gap: 3rem;
          }
        `}</style>
      </main>

      <Footer />
    </div>
  )
}
