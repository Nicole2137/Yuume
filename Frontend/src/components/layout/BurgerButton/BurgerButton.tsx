import styles from "./BurgerButton.module.scss";

interface BurgerButtonProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function BurgerButton({
  onClick,
  className = "",
  isOpen,
}: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      type="button"
      className={`${styles["burger-btn"]} ${isOpen ? styles["burger-btn--active"] : ""} ${className}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
