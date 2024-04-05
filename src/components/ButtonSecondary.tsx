import { ReactNode } from "react";
import styles from "./ButtonSecondary.module.css";

interface ButtonProps {
  variant?: "success" | "danger";
  onClick?: () => void;
  children: ReactNode;
}

function ButtonSecondary({
  variant = "success",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[variant]].join(" ")}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
