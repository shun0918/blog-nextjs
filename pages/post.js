import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchPostBySlug } from '../lib/contentful/contentful'
import PostContent from '../components/PostContent'
import styles from '../styles/pages/post.module.scss'

export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [slug, setSlug] = useState(router.query.slug)
  // const slug = 
  useEffect(() => {
    async function getPost() {
      const postData = await fetchPostBySlug(slug)
      setPost(postData)
      console.log(postData);
    }
    getPost()
  }, [router, slug])

  return (
    <>
      <Head>
        <title>{"fields" in post ? post.fields.title : "loading..."}</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
        
        {"fields" in post
          ? <PostContent 
              title={post.fields.title}
              thumbnail={post.fields.thumbnail}
              body={post.fields.body}
              publishedAt={post.fields.publishedAt}
              updatedAt={post.fields.updatedAt}
              slug={post.fields.slug}
            />
          : null }
        </div>
      </main>
    </>
  )
}