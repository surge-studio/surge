import Link from 'next/link';
import styles from './styles.module.css';
import type { FC } from 'react';

export const Error: FC = () => (
  <section className={styles.section}>
    <Link href="/" className={styles.link}>
      <div className={styles.video}>
        <video autoPlay loop muted>
          <source src="/video/404-robot.mp4" type="video/mp4" />
        </video>
      </div>
    </Link>
  </section>
);
