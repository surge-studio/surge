import type { FC } from 'react';

import { Container, Heading, Text } from '@components';
import styles from './styles.module.css';

type DevelopmentProps = {};

export const Development: FC<DevelopmentProps> = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.title}>
            <Heading size="h3" isDisplay>
              Design &amp; development services
            </Heading>
          </div>
          <div className={styles.design}>
            <Heading size="h5">Design</Heading>
            <Text>
              Unique but effective logos, branding, website and app UX &amp; UI
              design.
            </Text>
          </div>
          <div className={styles.development}>
            <Heading size="h5">Development</Heading>
            <Text>
              Pixel perfect, responsive and optimised websites and apps built to
              achieve your business goals.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};
