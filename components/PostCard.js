import Link from 'next/link'

function PostCard({ title, thumbnail, body, updatedAt, slug }) {
  return (
    <div className="post-card">
      <div className="post__eyecatch">
        <Link
          href={{ pathname: '/post', query: { slug:slug } }}
          passHref={true}
        >
          <img className="img" alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} width="320" height="160"/>
        </Link>
      </div>
      <h2>
        <Link
          href={{ pathname: '/post', query: { slug:slug } }}
          passHref={true}
        >
        {title}
        </Link>
      </h2>
      <style jsx>{`
        .post-card {
          position: relative;
          padding: 2rem;
          height: 280px;
          border-radius: 50px;
          background: #D7D6DE;
          box-shadow:  20px 20px 60px #b7b6bd,
                      -20px -20px 60px #f7f6ff;
          overflow: hidden;
        }
        .post-card__eyecatch {
          border-radius: 50px;
          background: #D7D6DE;
          box-shadow:  20px 20px 60px #b7b6bd,
                      -20px -20px 60px #f7f6ff;
          overflow: hidden;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 16px;
          position: absolute;
        }
        h2 {
          color: #000;
          font-size: 16px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
        img {
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(50%);
        }
      `}</style>
    </div>
  )
}

export default PostCard