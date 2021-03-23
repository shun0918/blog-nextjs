
function Footer() {
  return (
    <footer className="footer">
      <div className="content-info">
        <span>©️ 2021 created by Shun Nihei</span>
      </div>
      <style>{`
        .footer {
          padding: 3rem 0;
          background: #F4E2CA;
          box-shadow:  9px 9px 30px #c8b9a6,
                      -9px -9px 30px #ffffee;
        }
        .content-info {
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer