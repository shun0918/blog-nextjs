import { useEffect, useState } from 'react';
import { fetchAllPosts, parseImgUrl } from '~/lib/contentful/contentful';
import Abstruct from '~/components/Abstruct';
import SectionHeader from '~/components/SectionHeader';
import styles from '~/styles/pages/works.module.scss';

export default function Works(): JSX.Element {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    async function getWorks() {
      const allWorks = await fetchAllPosts('works');
      setWorks([...allWorks]);
    }
    getWorks();
  }, []);
  return (
    <>
      <SectionHeader title="Works" />
      <ul className={styles.works}>
        {works.length > 0
          ? works.map((m) => (
            <li className={styles.works__item} key={m.fields.slug}>
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
          : null}
      </ul>
    </>
  );
}
