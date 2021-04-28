import styles from '../styles/components/SectionHeader.module.scss';

function SectionHeader({title} : {title: string}) {
  return (
    <div className={styles['section-header']}>
      <h2 className={styles['section-header__title']}>{title}</h2>
    </div>
  );
}

export default SectionHeader;
