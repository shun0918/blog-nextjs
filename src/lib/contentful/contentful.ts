import Client from 'contentful';
import Works from '../../pages/works';

export interface Post {
  thumbnail: Client.Asset;
  title: Client.EntryFields.Text;
  body?: Client.EntryFields.RichText;
  slug: Client.EntryFields.Text;
  publishedAt: Client.EntryFields.Date;
  updatedAt: Client.EntryFields.Date;
}

export interface Works {
  slug: Client.EntryFields.Text;
  image: Client.Asset;
  name: Client.EntryFields.Text;
  description: Client.EntryFields.Text;
  roles: Client.EntryFields.Symbol[];
  url: Client.EntryFields.Text;
  createdAt: Client.EntryFields.Date;
}

export type ContentModels = Post | Works;
type CONTENT_TYPES = 'post' | 'works';
type PostOrderBy = '-fields.publishedAt' | '-fields.updatedAt';
type WorksOrderBy = '-fields.createdAt';
type OrderBy = PostOrderBy | WorksOrderBy;
type PostSelectFields =
  | 'fields.slug'
  | 'fields.thumbnail'
  | 'fields.title'
  | 'fields.body'
  | 'fields.publishedAt'
  | 'fields.updatedAt';
type WorksSelectFields =
  | 'fields.slug'
  | 'fields.image'
  | 'fields.name'
  | 'fields.description'
  | 'fields.roles'
  | 'fields.url'
  | 'fields.createdAt';
type Fields = PostSelectFields | WorksSelectFields;

// tslint:disable-next-line:no-var-requires
const contentfulClientApi = require('contentful');
const client: Client.ContentfulClientApi = contentfulClientApi.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
const maxDescriptionLength = 100;

/**
 * 全てのpostを取得
 */
export async function fetchAllPosts(
  contentType: CONTENT_TYPES,
  orderBy?: OrderBy,
): Promise<Client.Entry<ContentModels>[]> {
  const entries: Client.EntryCollection<ContentModels> = await client.getEntries({
    content_type: contentType,
    order: orderBy,
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType}.`);
}

// URLごとにpostを取得
export async function fetchPostBySlug<T>(
  slug: string | string[],
  contentType: CONTENT_TYPES,
): Promise<Client.Entry<T>> {
  const entries: Client.EntryCollection<T> = await client.getEntries({
    content_type: contentType,
    // 取得データの数
    limit: 1,
    // slugの値が引数slugと等しいpostを取得
    'fields.slug[in]': slug,
  });
  if (entries.items.length > 0) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType}.`);
}

function parsePostSlug({ fields }: Client.Entry<Post>): { slug: Client.EntryFields.Text } {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries: Client.EntryCollection<ContentModels>, cb = parsePostSlug): { slug: Client.EntryFields.Text }[] {
  return entries?.items?.map(cb);
}

// 全てのpostのURLを取得
export async function fetchFieldCollection(contentType: CONTENT_TYPES, field: Fields): Promise<{ slug: Client.EntryFields.Text }[]> {
  const entries: Client.EntryCollection<ContentModels> = await client.getEntries({
    content_type: contentType,
    // postのslugの値を取得
    select: field,
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}

/**
 * リッチテキストからdescription用のプレーンテキストに変換
 */
export function parsePlainTextForDescription(richText: Client.EntryFields.RichText) {
  return richText.content.reduce((acc, map) => {
    if (map.nodeType !== 'paragraph' || acc.length > maxDescriptionLength) {
      return acc;
    }
    return acc + concatContentValue(map.content);
  }, '');
}

/**
 * 再帰的にrichテキストからテキストを取得し、通常の文字列として返す。
 */
function concatContentValue(content: Client.RichTextContent[]): string {
  return content.reduce((acc, map) => {
    return 'content' in map ? acc + concatContentValue(map.content) : acc + map.value;
  }, '');
}

export function parseImgUrl(image: Client.Asset) {
  return 'https:' + image.fields.file.url;
}
