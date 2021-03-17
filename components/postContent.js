function PostContent({ title, thumbnail, body, publishedAt, updatedAt, slug }) {
  return (
    <div>
      <h1>{ title }</h1>
      <div>
        <img className="img" alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} />
      </div>
    </div>
  )
}

export default PostContent