import {
  fetchFieldCollection,
  fetchPostBySlug,
  parsePlainTextForDescription,
  Post
} from '../../lib/contentful/contentful';
import PostContent from '../../components/PostContent';
import Ogp from '../../components/Ogp';
import styles from '../../styles/pages/post/[slug].module.scss';
import { GetStaticProps, GetStaticPaths } from 'next';
import { _documentToReactComponents } from '../../lib/contentful/_documentToReactComponents';
import { Entry } from 'contentful';

type Props = {
  post: any;
  image: string;
  path: string;
  slug: string;
  description: string;
};

const Post = (props: Props) => {
  const body = _documentToReactComponents(props.post.fields.body);

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
  const post: Entry<Post> = await fetchPostBySlug(params.slug, 'post');
  const image = 'https:' + post.fields.thumbnail.fields.file.url;
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
  const paths = slugs.map((slug: any) => ({
    params: slug,
  }));
  console.log(paths);
  return { paths, fallback: 'blocking' };
}

export default Post;
