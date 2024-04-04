import { ChangeEvent, FormEvent, useState } from "react";
import { useComments } from "../contexts/CommentsProvider";
import { useUser } from "../contexts/UserProvider";
import Button from "./Button";

function Form() {
  const [message, setMessage] = useState<string>("");
  const { currentUser } = useUser();
  const { addComment } = useComments();
  const imgUrl = `/frontend-mentor-interactive-comments-section/images/avatars/${currentUser}`;

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
    <form className="item-container form" onSubmit={handleSubmit}>
      <textarea
        className="textarea"
        placeholder="Add a comment…"
        value={message}
        onChange={handleInput}
      ></textarea>
      <picture className="avatar">
        <source type="image/webp" srcSet={`${imgUrl}.webp`} />
        <img
          src={`${imgUrl}.png`}
          alt={`${currentUser}'s avatar`}
          width="32"
          height="32"
          title={currentUser}
        />
      </picture>
      <Button type="submit" variant="success">
        Send
      </Button>
    </form>
  );
}

export default Form;
