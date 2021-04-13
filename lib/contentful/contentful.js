/**
 * 20200317更新
 * content_type: post
 * フィールド一覧
 * thumbnail
 * title
 * body
 * slug
 * publishedAt
 * updatedAt
 */

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})
const maxDescriptionLength = 100;

/**
 * 全てのpostを取得 
 */
export async function fetchAllPosts() {
  const entries = await client.getEntries({
    // Content typeがpostのデータだけ取得
    content_type: "post",
    // postが作られた時間順に取得
    order: "-fields.publishedAt",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// URLごとにpostを取得
export async function fetchPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    // 取得データの数
    limit: 1,
    // slugの値が引数slugと等しいpostを取得
    "fields.slug[in]": slug,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// 最新のpostsを3つ取得
export async function fetchMorePosts(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 3,
    order: "-fields.postedAt",
     // slugの値が引数slugと等しくないpost
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

function parsePostSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// 全てのpostのURLを取得
export async function fetchAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    // postのslugの値を取得
    select: "fields.slug",
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}

/**
 * リッチテキストからdescription用のプレーンテキストに変換
 * @param Object richText ContentfulのrichTextタイプのフィールド
 * @return string description用のテキスト
 */
export function parsePlainTextForDescription(richText) {
  return richText.content.reduce((acc, m) => {
    if(m.nodeType !== "paragraph" || acc.length > maxDescriptionLength) {
      return acc
    }
    return acc + concatContentValue(m.content)
  }, "")
}

function concatContentValue(content) {
  return content.reduce((acc, map) => {
    console.log(acc);
    return "content" in map ?
        acc + concatContentValue(map.content)
      : acc + map.value
  } , "")
}