import styles from './styles.module.css';
import type { FC, ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
