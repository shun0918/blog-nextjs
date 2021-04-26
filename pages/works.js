import { useEffect, useState } from 'react'
import { fetchAllPosts, parseImgUrl, CONTENT_TYPE} from '../lib/contentful/contentful'
import Abstruct from '../components/Abstruct'
import SectionHeader from '../components/SectionHeader'
import styles from '../styles/pages/works.module.scss'

export default function works() {
  const [works, setWorks] = useState([])
  useEffect(() => {
    async function getWorks() {
      const allWorks = await fetchAllPosts(CONTENT_TYPE.WORKS)
      console.log(allWorks)
      setWorks([...allWorks])
    }
    getWorks()
  }, [])
  return (
    <>
      <SectionHeader
        title="Works"
      />
      <ul className={styles.works}>
      { works.map((m) => (
        <li
          className={styles.works__item}
          key={m.fields.slug}
        >
          <Abstruct
            title={m.fields.name}
            tags={m.fields.roles}
            description={m.fields.description}
            url={m.fields.url}
            imagePath={parseImgUrl(m.fields.image)}
            height="720"
            width="1280"
          />
        </li>
      ))

      }
      </ul>
    </>
  )
}

function parseImageUrl(image) {
  return ""
}