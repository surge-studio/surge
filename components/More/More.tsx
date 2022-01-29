import type { FC } from 'react';

import { Container, Heading, Text } from '@components';
import styles from './styles.module.css';

type MoreProps = {};

export const More: FC<MoreProps> = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.offset}>
            <div className={styles.video}>
              <iframe
                src="https://player.vimeo.com/video/570842252?background=1"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.content}>
            <Heading size="h3" isDisplay>
              And more
            </Heading>
            <Text>
              From video production to search engine optimisation - everything
              you need to achieve your business goals.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};
