import contentful, {Entry, EntryFields, Asset, RichTextContent} from 'contentful'
import Works from '../../pages/works';

/**
 * 20200317更新
 * content_type: post
 *   フィールド一覧
 *   thumbnail
 *   title
 *   body
 *   slug
 *   publishedAt
 *   updatedAt
 * content_type: works
 *   slug
 *   image
 *   name
 *   roles
 *   description
 *   url
 *   createdAt
 */

export interface Post {
  thumbnail: Asset;
  title: EntryFields.Text;
  body: EntryFields.RichText;
  slug: EntryFields.Text;
  publishedAt: EntryFields.Date;
  updatedAt: EntryFields.Date;
}

export interface Works {
  slug: EntryFields.Text;
  image: Asset;
  name: EntryFields.Text
  description: EntryFields.Text;
  roles: EntryFields.Symbol[];
  url: EntryFields.Text;
  createdAt: EntryFields.Date;
}
export type ContentModels = Post | Works;

export declare enum CONTENT_TYPES {
  POST = 'post',
  WORKS = 'works',
};
type PostOrderBy = '-fields.publishedAt' | '-fields.updatedAt';
type WorksOrderBy = '-fields.createdAt';
type OrderBy = PostOrderBy | WorksOrderBy;
type PostSelectFields = 'fields.slug' | 'fields.thumbnail' | 'fields.title' | 'fields.body' | 'fields.publishedAt' | 'fields.updatedAt';
type WorksSelectFields = 'fields.slug' | 'fields.image' | 'fields.name' | 'fields.description' | 'fields.roles' | 'fields.url' | 'fields.createdAt';
type Fields = PostSelectFields | WorksSelectFields;

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
const maxDescriptionLength = 100;

/**
 * 全てのpostを取得
 */
export async function fetchAllPosts(contentType: CONTENT_TYPES, orderBy?: OrderBy) {
  const entries = await client.getEntries({
    content_type: contentType,
    order: orderBy,
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType}.`);
}

// URLごとにpostを取得
export async function fetchPostBySlug<T>(slug: string | string[], contentType: CONTENT_TYPES):Promise<Entry<T>>  {
  const entries: contentful.EntryCollection<T> = await client.getEntries({
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

function parsePostSlug({ fields }: Entry<ContentModels> ) {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries: contentful.EntryCollection<ContentModels>, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// 全てのpostのURLを取得
export async function fetchFieldCollection(contentType: CONTENT_TYPES, field: Fields) {
  const entries: contentful.EntryCollection<ContentModels> = await client.getEntries({
    content_type: contentType,
    // postのslugの値を取得
    select: field,
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}

/**
 * リッチテキストからdescription用のプレーンテキストに変換
 * @param Object richText ContentfulのrichTextタイプのフィールド
 * @return string description用のテキスト
 */
export function parsePlainTextForDescription(richText: EntryFields.RichText) {
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
function concatContentValue(content: RichTextContent[]): string {
  return content.reduce((acc, map) => {
    return 'content' in map ? acc + concatContentValue(map.content) : acc + map.value;
  }, '');
}

export function parseImgUrl(image: Asset) {
  return 'https:' + image.fields.file.url;
}
