import type { FC } from 'react';

import { Container, Heading } from '@components';
import styles from './styles.module.css';

type HeroProps = {};

export const Hero: FC<HeroProps> = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <Heading size="h1" isDisplay>
            We grow tech companies
          </Heading>
        </div>
      </Container>
      <div className={styles.video}>
        <iframe
          src="https://player.vimeo.com/video/579222072?background=1"
          width="1920"
          height="1080"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};
