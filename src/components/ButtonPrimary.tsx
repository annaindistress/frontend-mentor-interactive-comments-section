import { ReactNode } from "react";
import styles from "./ButtonPrimary.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "success" | "danger";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

function ButtonPrimary({
  type = "button",
  variant = "default",
  className = "",
  onClick = () => {},
  children,
}: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[variant], className].join(" ")}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
