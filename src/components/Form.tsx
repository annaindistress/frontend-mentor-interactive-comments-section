import { ChangeEvent, FormEvent, useState } from "react";
import { useComments } from "../contexts/CommentsProvider";
import { useUser } from "../contexts/UserProvider";
import Avatar from "./Avatar";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./Form.module.css";

function Form() {
  const [message, setMessage] = useState<string>("");
  const { currentUser } = useUser();
  const { addComment } = useComments();

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const comment = {
      id: crypto.randomUUID(),
      content: message,
      createdAt: new Date().toString(),
      score: 0,
      username: currentUser,
      replies: [],
    };

    addComment(comment);
    setMessage("");
  }

  return (
    <form className={`item-container ${styles.form}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder="Add a comment…"
        value={message}
        onChange={handleInput}
      ></textarea>
      <Avatar username={currentUser} />
      <ButtonPrimary type="submit" variant="success">
        Send
      </ButtonPrimary>
    </form>
  );
}

export default Form;
