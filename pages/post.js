import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchPostBySlug } from '../lib/contentful/contentful'
import PostContent from '../components/PostContent'
import Ogp from '../components/Ogp'
import styles from '../styles/pages/post.module.scss'
import { _documentToReactComponents } from '../lib/contentful/_documentToReactComponents'


export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [slug, setSlug] = useState(router.query.slug)
  const [description, setDescription] = useState("")
  const [imagePath, setImagePath] = useState("")
  useEffect(() => {
    async function getPost() {
      const postData = await fetchPostBySlug(slug)
      console.log(postData);
      setPost(postData)
      setImagePath("https:" + postData.fields.thumbnail.fields.file.url)
      if(post.fields && post.fields.body){
        setDescription("現在Contentfulのリッチテキストからdescriptionを生成する方法を検討中です！")
        // setDescription(_documentToReactComponents(post.fields.body))
      }
    }
    getPost()
  }, [router, slug])

  return (
    <>
      <Head>
        <title>{"fields" in post ? post.fields.title + "| Shun Nihei" : "loading..."}</title>
      </Head>
      {"fields" in post
        ? <Ogp 
          title={post.fields.title}
          description={description}
          imagePath={imagePath}
          type="article"
          path={"/post"+"?slug="+post.fields.slug}
        />
      : null}
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
    </>
  )
}