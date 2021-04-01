import Head from 'next/head'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import styles from '../styles/pages/index.module.scss'
import { fetchAllPosts } from '../lib/contentful/contentful'

export default function index() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchAllPosts()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Shun Bibo Roku | shun nihei</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.posts__title}>記事一覧</h1>
          <div className={styles.posts__list}>
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
        </section>
      </main>
    </>
  )
}
