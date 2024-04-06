import { FormEvent, useState } from "react";
import { useComments } from "../contexts/CommentsProvider";
import { useUser } from "../contexts/UserProvider";
import Avatar from "./Avatar";
import Textarea from "./Textarea";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./FormCreate.module.css";

interface FormCreateProps {
  replyingTo?: string;
  parentComment?: string;
  onSubmit?: () => void;
}

function FormCreate({
  replyingTo = "",
  parentComment = "",
  onSubmit = () => null,
}: FormCreateProps) {
  const [message, setMessage] = useState<string>("");
  const { currentUser } = useUser();
  const { addComment } = useComments();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const comment = {
      id: crypto.randomUUID(),
      content: message,
      createdAt: new Date().toString(),
      score: 0,
      username: currentUser,
      replyingTo: replyingTo,
      parentComment: parentComment,
    };

    addComment(comment);
    setMessage("");
    onSubmit();
  }

  return (
    <form className={`item-container ${styles.form}`} onSubmit={handleSubmit}>
      <Textarea
        className={styles.textarea}
        nickname={replyingTo}
        value={message}
        setValue={setMessage}
      />
      <Avatar username={currentUser} />
      <ButtonPrimary type="submit" variant="success" className={styles.button}>
        {replyingTo !== "" ? "Reply" : "Send"}
      </ButtonPrimary>
    </form>
  );
}

export default FormCreate;
