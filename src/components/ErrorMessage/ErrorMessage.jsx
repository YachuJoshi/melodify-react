import React from 'react';
import { FaSadTear } from 'react-icons/fa';

import styles from './errorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <p className={styles.error__message}>
        Sorry, Failed To Fetch Data
      </p>
      <FaSadTear className={styles.error__icon} />
    </div>
  );
};

export { ErrorMessage };