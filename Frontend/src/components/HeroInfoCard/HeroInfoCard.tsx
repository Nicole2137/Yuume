import styles from "./HeroInfoCard.module.scss";

interface HeroInfoCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function HeroInfoCard({
  imgSrc,
  title,
  description,
}: HeroInfoCardProps) {
  return (
    <article className={styles["hero-info-card"]}>
      <img src={imgSrc} alt="" className={styles["hero-info-card__icon"]} />
      <div className={styles["hero-info-card__content"]}>
        <span className={styles["hero-info-card__title"]}>{title}</span>
        <p className={styles["hero-info-card__description"]}>{description}</p>
      </div>
    </article>
  );
}
