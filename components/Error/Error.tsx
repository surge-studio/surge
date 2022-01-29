import type { FC } from 'react';

import styles from './styles.module.css';
import Link from 'next/link';

type ErrorProps = {};

export const Error: FC<ErrorProps> = () => {
  return (
    <section className={styles.section}>
      <Link href="/" passHref>
        <a className={styles.link}>
          <div className={styles.video}>
            <video autoPlay loop muted>
              <source src="/video/404-robot.mp4" type="video/mp4" />
            </video>
          </div>
        </a>
      </Link>
    </section>
  );
};
