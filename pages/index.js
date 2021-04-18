import { useEffect, useState } from 'react'
import Head from 'next/head'
import { fetchAllPosts } from '../lib/contentful/contentful'
import Ogp from '../components/Ogp'
import FirstView from '../components/FirstView'
import PostCard from '../components/PostCard'
import SectionHeader from '../components/SectionHeader'
import styles from '../styles/pages/index.module.scss'

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
      <Ogp
        title="Shun Bibo Roku"
        description="UI/UXデザインから、フロントエンド、時にバックエンドなど、個人開発に役立つ些細な気づきを記事として残していきます。本ブログのソースコードも公開中。"
        image="/img/icon.jpeg"
        type="website"
        path="https://shunbiboroku.com"
      />
      <FirstView />
      <main className={styles.main}>
        <SectionHeader
          title="Articles"
        />
        <section className={styles.container}>
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
