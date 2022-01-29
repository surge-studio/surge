import type { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  isDisplay?: boolean;
  className?: string;
};

export const Heading: FC<HeadingProps> = ({
  as,
  size,
  isDisplay,
  className,
  ...props
}) => {
  const Element = as ?? size;

  return (
    <Element
      className={cx(
        styles.heading,
        isDisplay ? styles.display : styles.standard,
        styles[size],
        className
      )}
      {...props}
    />
  );
};
