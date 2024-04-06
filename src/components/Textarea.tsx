import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps {
  className: string;
  nickname?: string;
  value: string;
  setValue: (value: string) => void;
}

function Textarea({
  className,
  nickname = "",
  value,
  setValue,
}: TextareaProps) {
  const [width, setWidth] = useState(0);
  const nicknameRef = useRef<HTMLSpanElement>(null);

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  useEffect(function () {
    if (nicknameRef.current !== null) {
      const size = nicknameRef.current.getBoundingClientRect();
      setWidth(size.width);
    }
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      {nickname !== "" && (
        <span className={styles.nickname} ref={nicknameRef}>
          @{nickname}
        </span>
      )}
      <textarea
        className={[styles.textarea, className].join(" ")}
        placeholder={nickname !== "" ? "" : "Add a comment…"}
        value={value}
        onChange={handleInput}
        style={{ textIndent: `${width}px` }}
      ></textarea>
    </div>
  );
}

export default Textarea;
