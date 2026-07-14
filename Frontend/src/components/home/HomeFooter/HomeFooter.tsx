import styles from "./HomeFooter.module.scss";

export default function HomeFooter() {
  return (
    <footer className={styles["home-footer"]}>
      <img
        className={styles["home-footer__img"]}
        src="/img/decorations/clouds/footer-cloud.svg"
        alt=""
        aria-hidden="true"
      />
      <div className={styles["home-footer__content"]}>
        <img
          src="/img/branding/footer-logo.svg"
          alt="Logo of yuume portraying a company name with stars"
          className={styles["home-footer__logo"]}
        />
        <span
          className={`${styles["home-footer__text"]} ${styles["home-footer__text--desktop"]}`}
        >
          a soft little place that stays close to you
        </span>

        <span
          className={`${styles["home-footer__text"]} ${styles["home-footer__text--mobile"]}`}
        >
          dreams grow closer
        </span>

        <img
          src="/img/decorations/stars/tagline-star2.svg"
          alt=""
          aria-hidden="true"
          className={styles["home-footer__decoration"]}
        />
      </div>
    </footer>
  );
}
