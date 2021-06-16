import styles from '~/styles/components/Ben.module.scss';

type Props = {
  size?: number;
};

const Ben: React.FC<Props> = ({ size = 500 }) => (
  <div className={styles.ben}>
    <img
      src="/img/ben.png"
      alt="うさぎのベン"
      className={styles.ben__image}
      width={size}
      height={size}
    />
  </div>
);

export default Ben;
