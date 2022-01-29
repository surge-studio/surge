import type { FC } from 'react';

import styles from './styles.module.css';

type WordmarkProps = {};

export const Wordmark: FC<WordmarkProps> = () => {
  return (
    <svg
      className={styles.wordmark}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 180.4 21.7"
      xmlSpace="preserve"
    >
      <g id="Text">
        <g>
          <path
            className={styles.path}
            d="M0,4.2C0,1.4,1.6,0,4.7,0s4.7,1.4,4.7,4.2v2.6H6.6V4.2C6.6,3,6,2.4,4.7,2.4l0,0C3.4,2.4,2.8,3,2.8,4.2v2
			C2.8,7.3,4,8.6,6.3,10c2.1,1.3,3.2,2.9,3.2,4.7v2.7c0,2.8-1.6,4.2-4.7,4.2c-3.2,0-4.7-1.4-4.7-4.2v-2.6h2.8v2.6
			c0,1.2,0.6,1.8,1.9,1.8s1.9-0.6,1.9-1.8v-2.5c0-1.2-1.2-2.5-3.5-3.9C1.1,9.7,0,8.1,0,6.2C0,6.2,0,4.2,0,4.2z"
          />
          <path
            className={styles.path}
            d="M52.5,17.5c0,2.8-1.6,4.2-4.7,4.2c-3.1,0-4.7-1.4-4.7-4.2V0.4h2.8v17.1c0,1.2,0.6,1.8,1.9,1.8
			s1.9-0.6,1.9-1.8V0.4h2.8V17.5z"
          />
          <path
            className={styles.path}
            d="M86.2,0.3H91c2.9,0,4.3,1.4,4.3,4.2v3.3c0,1.8-1,2.9-2.9,3.6l3.9,9.9h-3.1L90,11.8l-1.1,0.1v9.4h-2.8
			L86.2,0.3L86.2,0.3z M89,2.7v6.9h1.2c0.5,0,0.9,0,1.2-0.1c0.8-0.3,1.2-0.9,1.2-1.7V4.5c0-1.2-0.6-1.8-1.9-1.8L89,2.7L89,2.7z"
          />
          <path
            className={styles.path}
            d="M138.4,17.5c0,2.8-1.6,4.2-4.7,4.2c-3.1,0-4.7-1.4-4.7-4.2V4.3c0-2.8,1.6-4.2,4.7-4.2s4.7,1.4,4.7,4.2v2.6
			h-2.8V4.3c0-1.2-0.6-1.8-1.9-1.8l0,0c-1.3,0-1.9,0.6-1.9,1.8v13.2c0,1.2,0.6,1.8,1.9,1.8s1.9-0.6,1.9-1.8v-5.4h-1.8V9.7h4.6V17.5z
			"
          />
          <path
            className={styles.path}
            d="M172,0.3h8.4v2.4h-5.7v6.9h4.9V12h-4.9v6.9h5.7v2.4H172V0.3z"
          />
        </g>
      </g>
    </svg>
  );
};
