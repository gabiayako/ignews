import Image from 'next/image';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={108}
          height={30}
          objectFit="contain"
        />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
};
