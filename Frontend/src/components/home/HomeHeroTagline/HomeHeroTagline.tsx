import styles from "./HomeHeroTagline.module.scss";

export default function HomeHeroTagline() {
  return (
    <div className={styles["home-hero-tagline"]}>
      <img
        src="/img/decorations/stars/cross-sparkle.svg"
        alt=""
        aria-hidden="true"
        className={styles["home-hero-tagline__img"]}
      />
      <span
        aria-hidden="true"
        className={styles["home-hero-tagline__dashed-line"]}
      ></span>
      <span className={styles["home-hero-tagline__text"]}>
        soft thoughts, beautiful days.
      </span>
      <span
        aria-hidden="true"
        className={styles["home-hero-tagline__dashed-line"]}
      ></span>
      <img
        src="/img/decorations/stars/diamond-sparkle.svg"
        alt=""
        aria-hidden="true"
        className={styles["home-hero-tagline__img"]}
      />
    </div>
  );
}
