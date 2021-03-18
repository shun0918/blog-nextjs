import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function PostContent({ title, thumbnail, body, publishedAt, updatedAt, slug }) {
  console.log(body);
  
  return (
    <div className={"container"}>
      <h1>{ title }</h1>
      <small>投稿日{" "}{publishedAt}</small>
      <div>
        <img className="img" alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} />
      </div>
      <div className="contentBody">
        {documentToReactComponents(body)}
      </div>
      <div>
        
      </div>
      <style jsx>
        {`.container {
          max-width:1024px;
          margin: 0 auto;
          padding: auto 5%;

        }
        .container .img {
          max-width:100%;
        }
        `}
      </style>
    </div>
  )
}

export default PostContent