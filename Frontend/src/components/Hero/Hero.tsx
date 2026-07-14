import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble";
import HeroTagline from "@/components/HeroTagline/HeroTagline";
import MoodCard from "@/components/MoodCard/MoodCard";
import HeroInfoCard from "@/components/HeroInfoCard/HeroInfoCard";
import NewsletterCard from "@/components/NewsletterCard/NewsletterCard";
import { heroInfoCardItems } from "@/constants/heroInfoCard";
import cloudBackground from "@public/img/decorations/clouds/cloud-background.png";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__main}>
        <article className={styles.hero__article}>
          <div className={styles["hero__heading-wrapper"]}>
            <SpeechBubble text="welcome to yuume" Icon={Heart} />
            <h1 className={styles["hero__heading-text"]}>
              How to Create <br />
              <span>Gentle</span> Dreams.
            </h1>
          </div>

          <HeroTagline />
          <p className={styles.hero__description}>
            It’s okay to feel alone sometimes.
            <br />
            But there is always a dream where someone understands.
          </p>
          <div className={styles.hero__btns}>
            <Link href="/journal" className={styles.hero__btn}>
              <span className={styles["hero__btn-text"]}>Begin Within</span>
              <img
                src="/img/decorations/btn-feather.svg"
                alt=""
                aria-hidden="true"
                className={styles["hero__btn-icon"]}
              />
            </Link>
            <Link
              href="/community"
              className={`${styles.hero__btn} ${styles["hero__btn--white"]}`}
            >
              <span className={styles["hero__btn-text"]}>Explore Dreams</span>
              <img
                src="/img/decorations/stars/btn-star.svg"
                alt=""
                aria-hidden="true"
                className={styles["hero__btn-icon"]}
              />
            </Link>
          </div>
        </article>
        <figure className={styles.hero__figure}>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            poster="/img/hero/girl-animation.webp"
            className={styles["hero__girl-animation"]}
          >
            <source src="/video/girl-animation.webm" type="video/webm" />
            <source src="/video/girl-animation.mp4" type="video/mp4" />
            Videos are not supported by your browser.
          </video>
          <div className={styles["hero__cloud-speech-bubble"]}>
            <img
              src="/img/decorations/clouds/cloud-speech-bubble.svg"
              alt=""
              className={styles["hero__cloud-speech-bubble-img"]}
            />
            <p className={styles["hero__cloud-speech-bubble-text"]}>
              You don’t <br />
              have to <br />
              know yet...
              <br />
              It’s okay to <br />
              feel a little <br />
              shy.
            </p>
          </div>

          <MoodCard />
        </figure>
        <Image
          src={cloudBackground}
          alt=""
          aria-hidden="true"
          className={styles["hero__cloud-background"]}
          priority
        />
      </div>

      <ul className={styles["hero__cards-list"]}>
        {heroInfoCardItems.map((item) => (
          <li key={item.imgSrc} className={styles["hero__card-item"]}>
            <HeroInfoCard {...item} />
          </li>
        ))}
        <li
          className={`${styles["hero__card-item"]} ${styles["hero__card-item--newsletter"]}`}
        >
          <NewsletterCard />
        </li>
      </ul>
    </section>
  );
}
