import styles from "./HomeInfoCard.module.scss";

interface HomeInfoCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function HomeInfoCard({
  imgSrc,
  title,
  description,
}: HomeInfoCardProps) {
  return (
    <article className={styles["home-info-card"]}>
      <img src={imgSrc} alt="" className={styles["home-info-card__icon"]} />
      <div className={styles["home-info-card__content"]}>
        <span className={styles["home-info-card__title"]}>{title}</span>
        <p className={styles["home-info-card__description"]}>{description}</p>
      </div>
    </article>
  );
}
