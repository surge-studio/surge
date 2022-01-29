import type { FC } from 'react';

import { Wordmark } from '@components';
import styles from './styles.module.css';

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.section}>
      <Wordmark />
    </footer>
  );
};
