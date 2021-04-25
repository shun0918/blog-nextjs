import Abstruct from '../components/Abstruct'
import SectionHeader from '../components/SectionHeader'
import styles from '../styles/pages/works.module.scss'

export default function works() {
  const works = [
    {
      src: "/img/works/cannatech.png",
      url: "#",
      name: "株式会社cannatech(キャナテック)様",
      tags: ["Planning","Design","WordPress","HTML","CSS(SCSS)"],
      description: "CBD製品の商品企画、製造、販売を行っている株式会社CannaTech様のコーポレートサイトを作成させていただきました。プランニングからデザイン、コーディング、WordPressを一貫して担当させていただきました。"
    },
    {
      src: "/img/works/cannatech.png",
      url: "#",
      name: "株式会社cannatech(キャナテック)様",
      tags: ["Planning","Design","WordPress","HTML","CSS(SCSS)"],
      description: "CBD製品の商品企画、製造、販売を行っている株式会社CannaTech様のコーポレートサイトを作成させていただきました。プランニングからデザイン、コーディング、WordPressを一貫して担当させていただきました。"
    },
    {
      src: "/img/works/cannatech.png",
      url: "#",
      name: "株式会社cannatech(キャナテック)様",
      tags: ["Planning","Design","WordPress","HTML","CSS(SCSS)"],
      description: "CBD製品の商品企画、製造、販売を行っている株式会社CannaTech様のコーポレートサイトを作成させていただきました。プランニングからデザイン、コーディング、WordPressを一貫して担当させていただきました。"
    },
  ]
  return (
    <>
      <SectionHeader
        title="Works"
      />
      <ul className={styles.works}>
      { works.map((m) => (
        <li className={styles.works__item}>
          <Abstruct
            src={m.src}
            url={m.url}
            title={m.name}
            tags={m.tags}
            description={m.description}
            width="1280"
            height="720"
          />
        </li>
      ))

      }
      </ul>
    </>
  )
}