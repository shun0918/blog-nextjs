import { ReactNode } from 'react';
import { Entry } from 'contentful';
import { _documentToReactComponents } from '../../lib/contentful/_documentToReactComponents';
import { Document } from '@contentful/rich-text-types';
import {
  fetchFieldCollection,
  fetchPostBySlug,
  parsePlainTextForDescription,
  Post,
} from '../../lib/contentful/contentful';
import PostContent from '../../components/PostContent';
import Ogp from '../../components/Ogp';
import styles from '../../styles/pages/post/[slug].module.scss';
import { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  post: Entry<Post>;
  image: string;
  path: string;
  slug: string;
  description: string;
  body: ReactNode;
};

const Slug = (props: Props): JSX.Element => {
  return (
    <>
      {'fields' in props.post ? (
        <Ogp
          title={props.post.fields.title + '| Shun Bibo Roku'}
          description={props.description}
          image={props.image}
          type="article"
          path={props.path}
        />
      ) : null}
      <main className={styles.main}>
        {'fields' in props.post ? (
          <PostContent
            title={props.post.fields.title}
            thumbnail={props.post.fields.thumbnail}
            body={props.body}
            publishedAt={props.post.fields.publishedAt}
            updatedAt={props.post.fields.updatedAt}
            slug={props.post.fields.slug}
          />
        ) : null}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Entry<Post> = await fetchPostBySlug(params.slug, 'post');
  const image = 'https:' + post.fields.thumbnail.fields.file.url;
  const path = '/post/' + params.slug;
  const description = parsePlainTextForDescription(post.fields.body);
  const body = _documentToReactComponents(post.fields.body as Document);

  return {
    props: {
      post,
      image,
      path,
      slug: params.slug,
      description,
      body,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchFieldCollection('post', 'fields.slug');
  const paths = slugs.map((slug) => ({
    params: slug,
  }));
  console.log(paths);
  return { paths, fallback: 'blocking' };
};

export default Slug;