import { forwardRef, HTMLProps } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

type RefType =
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLLabelElement
  | HTMLDivElement;

type TextProps = {
  as?: 'p' | 'span' | 'label' | 'div';
  size?: 'xs' | 'sm' | 'md';
} & Omit<HTMLProps<HTMLElement>, 'size'>;

export const Text = forwardRef<RefType, TextProps>(
  ({ as = 'p', size = 'md', className, ...props }, ref) => {
    const Element = as;
    return (
      <Element
        className={cx(styles.text, styles[size], className)}
        // @ts-expect-error ref issue
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
