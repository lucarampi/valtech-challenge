import Head from "next/head";
import MainCard from "./MainCard";

import PlaceCard from "./PlaceCard";
import { PlaceCardType } from "../interfaces";
import styles from "../styles/Home.module.css";
import { getPlaces } from "../utils/getPlaces";
import Image from "next/image";

export default async function Page() {
  let places: PlaceCardType[] = await getPlaces();

  const mainCardData = {
    imageUrl:
      "https://fqgiwjnywbpxoliwncof.supabase.co/storage/v1/object/public/valtech/others/asdasd%20(2).png",
    mainTitle: "Valtech",
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
        <span>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/lucarampi"
            target="_blank"
            rel="noreferrer"
            className={styles.footer_linkedin}
          >
            Luca A.R.
          </a>
        </span>
        <a
          href="https://github.com/lucarampi/valtech-challenge"
          target="_blank"
          rel="noreferrer"
          className={styles.footer_github}
        >
          <Image alt="Github" src="/github-icon.png" width={20} height={20} />
        </a>
      </footer>
    </div>
  );
}
