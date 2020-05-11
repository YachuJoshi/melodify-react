import React, { useState } from 'react';

import styles from './form.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  return (
    <form

      onSubmit={event => event.preventDefault()}
    >
      <div className={styles.form}>

        <div className={styles.label__holder}>
          <label htmlFor="name" className={styles.label}>
            Your Name
        </label>
          <label htmlFor="email" className={styles.label}>
            Your Email
        </label>
          <label htmlFor="feedback" className={styles.label}>
            Drop Us A Message
        </label>

        </div>

        <div className={styles.input__holder}>
          <input
            type="text"
            id="name"
            placeholder="Your Name Here"
            value={name}
            className={styles.input__name}
            onChange={event => setName(event.target.value)}
            required
          />

          <input
            type="email"
            id="email"
            placeholder="Your Email Here"
            value={email}
            className={styles.input__email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <textarea
            id="feedback"
            placeholder="Your Message Here"
            value={feedback}
            className={styles.input__feedback}
            onChange={event => setFeedback(event.target.value)}
          />
        </div>

      </div>
      <button className={styles.buttonSubmit}>
        Submit
      </button>
    </form>
  );
};

export { Form };

