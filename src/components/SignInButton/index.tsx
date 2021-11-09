import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export const SignInButton = () => {
  const isUserSignedIn = true;

  return isUserSignedIn ? (
    <button className={styles.container}>
      <FaGithub color="#04d361" className={styles.githubIcon} />
      <span>Gabi</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.container}>
      <FaGithub color="#eba417" className={styles.githubIcon} />
      <span>Sign in with GitHub</span>
    </button>
  );
};
