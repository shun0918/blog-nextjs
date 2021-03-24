import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/pages/post.module.scss'
import PostContent from '../components/postContent'
import { useEffect, useState } from 'react'
import { fetchPostBySlug } from '../lib/contentful/contentful';

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
    <div>
      <Head>
        <title>{"fields" in post ? post.fields.title : "loading..."}</title>
      </Head>

      <main className={styles.main}>
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
      </main>
    </div>
  )
}