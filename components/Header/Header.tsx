import type { FC } from 'react';

import { Container, Logomark, Wordmark } from '@components';
import styles from './styles.module.css';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <Wordmark />
          <Logomark />
        </div>
      </Container>
    </header>
  );
};
