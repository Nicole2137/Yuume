import styles from "./HomeSpeechBubble.module.scss";
import type { ElementType } from "react";

interface HomeSpeechBubbleProps {
  text: string;
  Icon?: ElementType; //renderable element
}

export default function HomeSpeechBubble({ text, Icon }: HomeSpeechBubbleProps) {
  return (
    <div className={styles["home-speech-bubble"]}>
      <img
        src="/img/decorations/speech-bubble.svg"
        alt=""
        aria-hidden="true"
        className={styles["home-speech-bubble__img"]}
      />
      <span className={styles["home-speech-bubble__text"]}>
        {text}{" "}
        {Icon && (
          <Icon aria-hidden="true" className={styles["home-speech-bubble__icon"]} />
        )}
      </span>
    </div>
  );
}
