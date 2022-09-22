import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <button>click Me</button>
    </div>
  );
}
