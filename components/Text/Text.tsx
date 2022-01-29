import type { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

type TextProps = {
  as?: 'p' | 'span' | 'label' | 'div';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
};

export const Text: FC<TextProps> = ({
  as = 'p',
  size = 'md',
  className,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(styles.text, styles[size], className)} {...props} />
  );
};
