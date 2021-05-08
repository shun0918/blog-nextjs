import Profile from '~/components/Profile';
import styles from '~/styles/components/FirstView.module.scss';

const FirstView: React.FC = () => (
  <header className={styles.firstview}>
    <div className={styles.firstview__inner}>
      <h1 className={styles.firstview__logo}>Shun Bibo Roku</h1>
    </div>
    <Profile />
  </header>
);

export default FirstView;
