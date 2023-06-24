import { Wordmark } from '../Wordmark/Wordmark';
import styles from './styles.module.css';
import type { FC } from 'react';

type FooterProps = {};

export const Footer: FC<FooterProps> = () => (
  <footer className={styles.section}>
    <Wordmark />
  </footer>
);
