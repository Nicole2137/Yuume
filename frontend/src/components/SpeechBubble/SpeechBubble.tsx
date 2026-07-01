import styles from "./SpeechBubble.module.scss";
import type { ElementType } from "react";

interface SpeechBubbleProps {
  text: string;
  Icon?: ElementType; //renderable element
}

export default function SpeechBubble({ text, Icon }: SpeechBubbleProps) {
  return (
    <div className={styles["speech-bubble"]}>
      <img
        src="/img/decorations/speech-bubble.svg"
        alt=""
        aria-hidden="true"
        className={styles["speech-bubble__img"]}
      />
      <span className={styles["speech-bubble__text"]}>
        {text}{" "}
        {Icon && (
          <Icon aria-hidden="true" className={styles["speech-bubble__icon"]} />
        )}
      </span>
    </div>
  );
}
