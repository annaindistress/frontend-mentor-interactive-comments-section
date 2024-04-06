import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAutosizeTextarea } from "../hooks/useAutosizeTextarea";
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
  const [widthNickname, setWidthNickname] = useState(0);
  const nicknameRef = useRef<HTMLSpanElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextarea(textareaRef.current, value);

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  useEffect(function () {
    if (nicknameRef.current !== null) {
      const size = nicknameRef.current.getBoundingClientRect();
      setWidthNickname(size.width);
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
        style={{ textIndent: `${widthNickname}px` }}
        placeholder={nickname !== "" ? "" : "Add a comment…"}
        ref={textareaRef}
        value={value}
        onChange={handleInput}
      >
        {nickname !== "" && (
          <span className={styles.nickname} ref={nicknameRef}>
            @{nickname}
          </span>
        )}
      </textarea>
    </div>
  );
}

export default Textarea;
