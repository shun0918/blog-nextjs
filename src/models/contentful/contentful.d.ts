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
export type CONTENT_TYPES = 'post' | 'works';
export type PostOrderBy = '-fields.publishedAt' | '-fields.updatedAt';
export type WorksOrderBy = '-fields.createdAt';
export type OrderBy = PostOrderBy | WorksOrderBy;
export type PostSelectFields =
  | 'fields.slug'
  | 'fields.thumbnail'
  | 'fields.title'
  | 'fields.body'
  | 'fields.publishedAt'
  | 'fields.updatedAt';
export type WorksSelectFields =
  | 'fields.slug'
  | 'fields.image'
  | 'fields.name'
  | 'fields.description'
  | 'fields.roles'
  | 'fields.url'
  | 'fields.createdAt';
export type Fields = PostSelectFields | WorksSelectFields;

export {};
