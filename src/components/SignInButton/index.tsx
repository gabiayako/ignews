import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/client';

export const SignInButton = () => {
  const [session] = useSession();

  return session ? (
    <button className={styles.container} onClick={() => signOut()}>
      <FaGithub color="#04d361" className={styles.githubIcon} />
      <span>{session.user.name}</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.container} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" className={styles.githubIcon} />
      <span>Sign in with GitHub</span>
    </button>
  );
};
