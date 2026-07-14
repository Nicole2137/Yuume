"use client";

import { useState } from "react";
import styles from "./HomeMoodCard.module.scss";
import { moodListItems, defaultMood } from "@/constants/moodList";

export default function HomeMoodCard() {
  const [currentMood, setCurrentMood] = useState(defaultMood);

  return (
    <article className={styles["home-mood-card"]}>
      <div className={styles["home-mood-card__header"]}>
        <span className={styles["home-mood-card__header-text"]}>Today's Mood</span>
        <img
          className={styles["home-mood-card__header-img"]}
          src="/img/branding/logo-cat.svg"
          alt=""
          aria-hidden="true"
        />
      </div>

      <hr />

      <div className={styles["home-mood-card__main"]}>
        <span className={styles["home-mood-card__current-mood"]}>{currentMood}</span>
        <ul className={styles["home-mood-card__list"]}>
          {moodListItems.map((item) => (
            <li key={item.moodText} className={styles["home-mood-card__list-item"]}>
              <button
                onMouseEnter={() => setCurrentMood(item.moodText)}
                onFocus={() => setCurrentMood(item.moodText)}
                aria-label={`Set mood to ${item.moodText}`}
                className={styles["home-mood-card__list-btn"]}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <img
        src="/img/decorations/clouds/little-cloud.svg"
        alt=""
        aria-hidden="true"
        className={styles["home-mood-card__cloud-icon"]}
      />
    </article>
  );
}
