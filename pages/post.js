import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import PostContent from '../components/postContent'
import { useEffect, useState } from 'react'
import { getPostBySlug } from '../lib/contentful/contentful';

export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [slug, setSlug] = useState(router.query.slug)
  // const slug = 
  useEffect(() => {
    async function getPost() {
      const postData = await getPostBySlug(slug)
      console.log(postData)
      setPost({...postData})
    }
    getPost().then(() => {
      console.log("ss",post);
    })
  }, [slug])

  return (
    <div>
      <Head>
        {/* <title>{ post.fields.title }</title> */}
        <title>test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>aa</p>
        {/* <PostContent 
          title={post.fields.title}
          thumbnail={post.fields.thumbnail}
          body={post.fields.body}
          publishedAt={post.fields.publishedAt}
          updatedAt={post.fields.updatedAt}
          slug={post.fields.slug}
        /> */}
      </main>
    </div>
  )
}