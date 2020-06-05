import React from 'react';

import styles from './loadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.center_div}>
      <div className={styles.lds_roller}>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export { LoadingSpinner };