import Link from 'next/link'

function PostCard({ title, thumbnail, body, updatedAt, slug }) {
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
      <style jsx>{`
        .post-card {
          position: relative;
          padding: 1rem 1rem;
          height: 280px;
          border-radius: 50px;
          border-radius: 50px;
          border-radius: 50px;
          background: #F4E2CA;
          box-shadow:  32px 32px 64px #cfc0ac,
                      -32px -32px 64px #ffffe8;
          overflow: hidden;
        }
        .post-card__eyecatch--flame {
        }
        .post-card__eyecatch--link {
          border-radius: 30px;
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
        }
        .post-card__title {
          color: #232323;
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
      `}</style>
    </div>
  )
}

export default PostCard