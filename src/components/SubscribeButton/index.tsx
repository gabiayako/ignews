import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => (
  <button type="button" className={styles.container}>
    Subscribe now
  </button>
);
