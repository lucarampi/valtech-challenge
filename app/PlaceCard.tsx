"use client";
import Image from "next/image";
import styles from "../styles/PlaceCard.module.css";

interface CardProps {
  buttonText: string;
  topTitle: string;
  mainTitle: string;
  message?: string;
  imageUrl: string;
}

export default function PlaceCard({
  buttonText,
  mainTitle,
  topTitle,
  message,
  imageUrl,
}: CardProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.card_image}
        alt={mainTitle}
        src={imageUrl}
        fill
      />

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
