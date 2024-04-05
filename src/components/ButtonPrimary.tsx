import { ReactNode } from "react";
import styles from "./ButtonPrimary.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant: "default" | "success" | "danger";
  children: ReactNode;
}

function ButtonPrimary({
  type = "button",
  variant = "default",
  children,
}: ButtonProps) {
  return (
    <button className={[styles.button, styles[variant]].join(" ")} type={type}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
