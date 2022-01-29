import type { FC } from 'react';

import styles from './styles.module.css';

type ContainerProps = {};

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
