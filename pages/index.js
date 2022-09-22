import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className={styles.container}>
      <button onClick={increment}>count is: {count}</button>
    </div>
  );
}
