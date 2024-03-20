import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { _documentToReactComponents } from '~/lib/contentful/_documentToReactComponents';
import { Document } from '@contentful/rich-text-types';
import {
  fetchFieldCollection,
  fetchPostBySlug,
  parsePlainTextForDescription,
} from '~/lib/contentful/contentful';
import { Post } from '~/models/contentful/contentful';
import PostContent from '~/components/PostContent';
import Ogp from '~/components/Ogp';
import styles from '~/styles/pages/post/[slug].module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '~/components/Header';

type Props = {
  post: Entry<EntrySkeletonType<Post, 'post'>, undefined, string>;
  image: string;
  path: string;
  slug: string;
  description: string;
};

const Slug = (props: Props): JSX.Element => {
  const body = _documentToReactComponents(props.post.fields.body as Document);

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
      <Header />
      <main className={styles.main}>
        {'fields' in props.post ? (
          <PostContent
            title={props.post.fields.title}
            thumbnail={props.post.fields.thumbnail}
            body={body}
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
  const post = await fetchPostBySlug(params.slug);
  const field = post.fields.thumbnail as unknown as Asset;
  const image = 'https:' + field.fields.file.url;
  const path = '/post/' + params.slug;
  const description = parsePlainTextForDescription(post.fields.body);

  return {
    props: {
      post,
      image,
      path,
      slug: params.slug,
      description,
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
