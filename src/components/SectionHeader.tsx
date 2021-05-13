import styles from '~/styles/components/SectionHeader.module.scss';

type Props = {
  title: string;
};

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles['section-header']}>
      <h2 className={styles['section-header__title']}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
