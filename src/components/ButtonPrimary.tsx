import { ReactNode } from "react";
import styles from "./ButtonPrimary.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "success" | "danger";
  className?: string;
  children: ReactNode;
}

function ButtonPrimary({
  type = "button",
  variant = "default",
  className = "",
  children,
}: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[variant], className].join(" ")}
      type={type}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
