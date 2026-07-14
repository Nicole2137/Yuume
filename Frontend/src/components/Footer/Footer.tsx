import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.footer__img}
        src="/img/decorations/clouds/footer-cloud.svg"
        alt=""
        aria-hidden="true"
      />
      <div className={styles.footer__content}>
        <img
          src="/img/branding/footer-logo.svg"
          alt="Logo of yuume portraying a company name with stars"
          className={styles["footer__logo"]}
        />
        <span
          className={`${styles.footer__text} ${styles["footer__text--desktop"]}`}
        >
          a soft little place that stays close to you
        </span>

        <span
          className={`${styles.footer__text} ${styles["footer__text--mobile"]}`}
        >
          dreams grow closer
        </span>

        <img
          src="/img/decorations/stars/tagline-star2.svg"
          alt=""
          aria-hidden="true"
          className={styles.footer__decoration}
        />
      </div>
    </footer>
  );
}
