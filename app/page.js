'use client'
import { useState } from 'react';
import styles from './page.module.css'; // ✅ Import CSS module

export default function Home() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎲 DICE</h1>
      <div className={styles.dice}>{dice}</div>
      <button onClick={rollDice} className={styles.button}>
        Roll it
      </button>
    </div>
  );
}
