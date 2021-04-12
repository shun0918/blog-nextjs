import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchAllPostsWithSlug, fetchPostBySlug } from '../../lib/contentful/contentful'
import PostContent from '../../components/PostContent'
import Ogp from '../../components/Ogp'
import styles from '../../styles/pages/post.module.scss'
import { _documentToReactComponents } from '../../lib/contentful/_documentToReactComponents'


const Post = (props) => {
  const description = "現在準備中"
  return (
    <>
      {"fields" in props.post
        ? <Ogp 
          title={props.post.fields.title + "| Shun Bibo Roku"}
          description={description || ""}
          image={props.image}
          type="article"
          path={props.path}
        />
      : null}
      <main className={styles.main}>
        {"fields" in props.post
          ? <PostContent 
              title={props.post.fields.title}
              thumbnail={props.post.fields.thumbnail}
              body={props.post.fields.body}
              publishedAt={props.post.fields.publishedAt}
              updatedAt={props.post.fields.updatedAt}
              slug={props.post.fields.slug}
            />
          : null }
      </main>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug)
  const image = "https:" + post.fields.thumbnail.fields.file.url
  const path = "/post/" + params.slug

  return {
    props: {
      post,
      image,
      path,
      slug: params.slug
    },
  }
}

export async function getStaticPaths() {
  const slugs = await fetchAllPostsWithSlug()
  const paths = slugs.map(slug => ({
    params: slug,
  }))
  console.log(paths);
  return {paths, fallback: false}
}

export default Post