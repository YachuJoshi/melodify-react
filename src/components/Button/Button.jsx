import React from 'react';

import styles from './button.module.scss';

const Button = ({ type, children }) => {
  if (type === 'FREE') {
    return (
      <button className={styles.buttonFree}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles.buttonPremium}>
      {children}
    </button>
  );
};

export { Button };