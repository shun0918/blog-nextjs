import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../styles/components/PostContent.module.scss'

function PostContent({ title, thumbnail, body, publishedAt, updatedAt, slug }) {
  console.log(body)
  const Code = ({children}) => <div><pre><code>{children}</code></pre></div>
  const H1 = ({children}) => <h3>{children}</h3>
  const H2 = ({children}) => <h4>{children}</h4>
  const H3 = ({children}) => <h5>{children}</h5>
  const H4 = ({children}) => <h6>{children}</h6>
  const H5 = ({children}) => <p>{children}</p>
  const H6 = ({children}) => <p>{children}</p>
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      // コードブロックをdivで括る
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x) => x.type === "code")
        ) {
          return <Code>{children}</Code>;
        }
        return <p>{children}</p>;
      },
    }
  }
  
  return (
    <article className={styles.content}>
      <div className={styles["content__eyecatch-wrapper"]}>
        <img
          className={styles.content__eyecatch}
          alt={thumbnail.fields.file.fileName}
          src={thumbnail.fields.file.url}
          width="1280"
          height="512"
        />
      </div>
      <div className={styles.content__head}>
        <h2 className={styles.content__title}>{ title }</h2>
        <p className={styles.content__date}>投稿日:{" "}{publishedAt}</p>
      </div>
      <div className={styles.content__body}>
        {documentToReactComponents(body, options)}
      </div>
    </article>
  )
}

export default PostContent