import type { FC } from 'react';

import { Container, Heading, Text } from '@components';
import styles from './styles.module.css';

type StrategyProps = {};

export const Strategy: FC<StrategyProps> = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.title}>
            <Heading size="h3" isDisplay>
              Product lead growth &amp; business strategy
            </Heading>
          </div>
          <div className={styles.content}>
            <Text>
              Our team has worked for some of the biggest names in tech in
              Australia. We&apos;ll work with you to map a path to achieving
              product-market fit, and then to scale up and grow your business.
            </Text>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.offset}>
            <div className={styles.video}>
              <iframe
                src="https://player.vimeo.com/video/570233074?background=1"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
