"use client";
import styles from "./PlaceCard.module.css";

interface CardProps {
  buttonText: string;
  topTitle: string;
  mainTitle: string;
  message?: string;
}

export default function PlaceCard({
  buttonText,
  mainTitle,
  topTitle,
  message,
}: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.card_main}>
        <h3 className={styles.card_topTitle}>{topTitle}</h3>
        <h2 className={styles.card_mainTitle}>{mainTitle}</h2>
      </div>
      <section className={styles.card_info}>
        <p> {message}</p>
      </section>
      <button className={styles.card_button} type="button">
        {buttonText}
      </button>
    </article>
  );
}
