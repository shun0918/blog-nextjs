function Post({ title, thumbnail, body, updatedAt, slug }) {
  console.log({title, thumbnail, body, updatedAt, slug});
  return (
    <div className="container">
      <a href={slug}>
        <img className="img" alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} />
      </a>
      <div className="text">
        <h2>{title}</h2>
        <h4>{updatedAt}</h4>
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
          width:calc(453px * 16 / 9);
          max-width: 100%
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
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
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(50%);
        }
      `}</style>
    </div>
  )
}

export default Post