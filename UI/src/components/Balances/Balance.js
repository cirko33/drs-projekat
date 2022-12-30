import React from 'react';
import styles from './Balance.module.css';

const Balance = (props) => {
      return (
        <li className={styles.balance}>
            <div>
                <div className={styles.amount}>{props.amount}</div>
                <div className={styles.currency}>{props.currency}</div>
            </div>
        </li>
      );
}

export default Balance;