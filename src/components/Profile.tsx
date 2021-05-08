import styles from '~/styles/components/Profile.module.scss';
import RoundIcon from './RoundIcon';

const Profile: React.FC = () => {
  const icons = [
    {
      alt: 'GitHub',
      src: '/img/Icon awesome-github.png',
      href: 'https://github.com/shun0918',
    },
    {
      alt: 'Twitter',
      src: '/img/Icon awesome-twitter.png',
      href: 'https://twitter.com/DVq0Hp0iU6itt4N',
    },
    {
      alt: '制作実績',
      src: '/img/Icon awesome-handshake.png',
      href: '/works',
    },
  ];
  return (
    <>
      <div className={styles.profile}>
        <div className={styles['profile__image-flame']}>
          <img
            src="/img/ben.png"
            alt="うさぎのベン"
            className={styles.profile__image}
            width="500"
            height="500"
          />
        </div>
        <div className={styles.profile__details}>
          <h2 className={styles.profile__title}>
            好きな技術は、
            <br className={styles['profile__title--spbr']} aria-hidden="true" />
            個人開発で。
          </h2>
          <p>
            UI/UXデザインから、フロントエンド、時にバックエンドなど、個人開発に役立つ些細な気づきを記事として残していきます。
          </p>
          <p>本ブログのソースコードも公開中。</p>
          <div className={styles.profile__icons}>
            {icons.map((m, i) => (
              <div key={i} className={styles.profile__icon}>
                <RoundIcon alt={m.alt} src={m.src} href={m.href} width="35" height="35" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
