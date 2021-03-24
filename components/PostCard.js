import Link from 'next/link'

function PostCard({ title, thumbnail, body, publishedAt ,updatedAt, slug }) {
  return (
    <div className="post-card">
      <div className="post-card__eyecatch--flame">
        <Link
          href={{ pathname: '/post', query: { slug:slug } }}
          passHref={true}
        >
          <a className="post-card__eyecatch--link">
            <img className="img" alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} width="280" height="160"/>
          </a>
        </Link>
      </div>
      <h2 className="post-card__title">
        <Link
          href={{ pathname: '/post', query: { slug:slug } }}
          passHref={true}
        >
        {title}
        </Link>
      </h2>
      <p className="datetime">投稿日:<time>{publishedAt}</time></p>
      <style jsx>{`
        .post-card {
          position: relative;
          padding: 0.75rem;
          border-radius: 30px;
          background: #F4E2CA;
          box-shadow:  9px 9px 30px #c8b9a6,
                      -9px -9px 30px #ffffee;
          overflow: hidden;
        }
        .post-card__eyecatch--flame {
        }
        .post-card__eyecatch--link {
          border-radius: 20px;
          display: block;
          overflow: hidden;
          position: relative;
        }
        .post-card__eyecatch--link:before {
          content: '';
          display: block;
          padding-top: 50%;
        }
        .post-card__eyecatch--link img {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          left: 0;
        }
        .post-card__title {
          color: #232323;
          font-size: 1rem;
          margin-top: 1rem
        }
        .text {
          margin-top: -160px;
          padding: 16px;
          position: absolute;
        }
        .datetime {
          font-size: 0.75rem;
          margin: 0.5rem auto 1rem;
        }
      `}</style>
    </div>
  )
}

export default PostCard