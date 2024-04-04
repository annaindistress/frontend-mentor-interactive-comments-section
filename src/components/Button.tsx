import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant: "default" | "success" | "danger";
  children: ReactNode;
}

function Button({
  type = "button",
  variant = "default",
  children,
}: ButtonProps) {
  return (
    <button className={`button button--${variant}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
