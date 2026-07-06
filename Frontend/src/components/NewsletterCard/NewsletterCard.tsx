"use client";

import styles from "./NewsletterCard.module.scss";
import { useNewsletter } from "@/hooks/useNewsletter";

export default function NewsletterCard() {
  const { email, setEmail, status, handleSubmit } = useNewsletter();

  return (
    <article className={styles["newsletter-card"]}>
      <div className={styles["newsletter-card__text-content"]}>
        <span className={styles["newsletter-card__title"]}>
          Follow Yuume’s growth
        </span>
        <p className={styles["newsletter-card__text"]}>
          Receive updates about new features
          <br />
          and the world we’re building together.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles["newsletter-card__form"]}>
        <input
          placeholder="Enter your email address"
          type="email"
          aria-label="Email address"
          className={styles["newsletter-card__input"]}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
        />
        <button
          className={styles["newsletter-card__btn"]}
          aria-label="Subscribe to newsletter"
          disabled={status === "loading"}
        >
          <img
            src="/img/decorations/send-icon.svg"
            alt=""
            className={styles["newsletter-card__img"]}
          />
        </button>
      </form>
    </article>
  );
}
