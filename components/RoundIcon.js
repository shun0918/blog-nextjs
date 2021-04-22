import styles from '../styles/components/RoundIcon.module.scss'
import Link from 'next/link'

function RoundIcon({ href, src, alt="", width="37", height="37"}) {
  const regex = /^https:\/\//;
  const isOtherSite = href.match(regex)
  console.log(isOtherSite)
  const LinkTag = ({children}) => isOtherSite ?
    <a href={href}>{children}</a>
    : <Link href={href}><a>{children}</a></Link>
  return (
    <div className={styles.roundicon}>
      <LinkTag>
        <img 
          className={styles.roundicon__image}
          src={ src }
          alt={ alt }
          width={ width }
          height={ height }
        />
      </LinkTag>
    </div>
  )
}

export default RoundIcon