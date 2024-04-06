import { FormEvent, useState } from "react";
import { useComments } from "../contexts/CommentsProvider";
import Textarea from "./Textarea";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./FormEdit.module.css";

interface FormEditProps {
  id: string;
  content: string;
  replyingTo: string;
  onSubmit: () => void;
}

function FormEdit({ id, content, replyingTo, onSubmit }: FormEditProps) {
  const [message, setMessage] = useState<string>(content);
  const { updateComment } = useComments();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (message === "") return;
    updateComment(id, message);
    onSubmit();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Textarea
        className={styles.textarea}
        nickname={replyingTo}
        value={message}
        setValue={setMessage}
      />
      <ButtonPrimary type="submit" variant="success" className={styles.button}>
        Update
      </ButtonPrimary>
    </form>
  );
}

export default FormEdit;
