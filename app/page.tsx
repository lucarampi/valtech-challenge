
import Head from "next/head";
import MainCard from "./MainCard";

import PlaceCard from "./PlaceCard";
import { PlaceCardType } from "../interfaces";
import styles from "../styles/Home.module.css";
import { getPlaces } from "../utils/getPlaces";

export default async function Page() {
  let places: PlaceCardType[] = await getPlaces()

  const mainCardData = {
    imageUrl:
      "https://fqgiwjnywbpxoliwncof.supabase.co/storage/v1/object/public/valtech/others/asdasd%20(2).png",
    mainTitle: "Valtech_",
    topTitle: "Front-end",
    buttonText: "Get in touch",
    message:
      "Complexity, uncertainty and rapid technological change have transformed the business landscape. Historical performance is an unreliable indicator of future success and the way we connect to each other matters. The way we learn matters. ",
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.fill}>
          <MainCard {...mainCardData} />
        </div>
        {places.length > 0 ? (
          places.map((item, index) => (
            <div
              key={item.id}
              className={
                index === 0
                  ? styles.square
                  : index === 5
                  ? `${styles.square} ${styles.last}`
                  : ""
              }
            >
              <PlaceCard {...item} />
            </div>
          ))
        ) : (
          <div> Could not load data...</div>
        )}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/lucarampi/valtech-challenge"
          target="_blank"
          rel="noreferrer"
        >
          Developed by <span className={styles.logo}>Luca A.R.</span>
        </a>
      </footer>
    </div>
  );
}

