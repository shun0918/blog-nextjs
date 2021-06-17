/* eslint-disable @typescript-eslint/no-var-requires */
import Client from 'contentful';
import * as Types from '~/models/contentful/contentful';

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
  contentType: Types.CONTENT_TYPES,
  orderBy?: Types.OrderBy,
): Promise<Client.Entry<Types.ContentModels>[]> {
  const entries: Client.EntryCollection<Types.ContentModels> = await client.getEntries({
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
  contentType: Types.CONTENT_TYPES,
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

function parsePostSlug({ fields }: Client.Entry<Types.Post>): { slug: Client.EntryFields.Text } {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(
  entries: Client.EntryCollection<Types.ContentModels>,
  cb = parsePostSlug,
): { slug: Client.EntryFields.Text }[] {
  return entries?.items?.map(cb);
}

// 全てのpostのURLを取得
export async function fetchFieldCollection(
  contentType: Types.CONTENT_TYPES,
  field: Types.Fields,
): Promise<{ slug: Client.EntryFields.Text }[]> {
  const entries: Client.EntryCollection<Types.ContentModels> = await client.getEntries({
    content_type: contentType,
    // postのslugの値を取得
    select: field,
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}

/**
 * リッチテキストからdescription用のプレーンテキストに変換
 */
export function parsePlainTextForDescription(richText: Client.EntryFields.RichText): string {
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

export function parseImgUrl(image: Client.Asset): string {
  return 'https:' + image.fields.file.url;
}
