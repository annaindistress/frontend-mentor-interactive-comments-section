import { useState } from "react";
import { useUser } from "../contexts/UserProvider";
import { useComments } from "../contexts/CommentsProvider";
import getDate from "../helpers/getDate";
import Delete from "../assets/icons/delete.svg?react";
import Edit from "../assets/icons/edit.svg?react";
import Reply from "../assets/icons/reply.svg?react";
import Avatar from "./Avatar";
import ButtonSecondary from "./ButtonSecondary";
import Likes from "./Likes";
import FormCreate from "./FormCreate";
import styles from "./Post.module.css";

interface PostProps {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  username: string;
  replyingTo?: string;
  parentComment?: string;
}

function Post({
  id,
  content,
  createdAt,
  score,
  username,
  replyingTo = "",
  parentComment = "",
}: PostProps) {
  const { currentUser } = useUser();
  const { deleteComment } = useComments();
  const [isReply, setIsReply] = useState(false);

  return (
    <div className={styles.formContainer}>
      <article className={`item-container ${styles.post}`}>
        <header className={styles.header}>
          <Avatar username={username} />
          <span className={styles.username}>
            {username}
            {username === currentUser && (
              <span className={styles.author}>you</span>
            )}
          </span>
          <span>{getDate(createdAt)}</span>
        </header>
        <p className={styles.message}>
          {replyingTo !== "" && (
            <span
              className={[styles.username, styles["username--reply"]].join(" ")}
            >
              @{replyingTo}
            </span>
          )}
          {content}
        </p>
        <Likes id={id} score={score} />
        <div className={styles.controls}>
          {currentUser === username ? (
            <>
              <ButtonSecondary
                variant="danger"
                onClick={() => deleteComment(id)}
              >
                <Delete />
                Delete
              </ButtonSecondary>
              <ButtonSecondary>
                <Edit />
                Edit
              </ButtonSecondary>
            </>
          ) : (
            <ButtonSecondary onClick={() => setIsReply((state) => !state)}>
              <Reply />
              Reply
            </ButtonSecondary>
          )}
        </div>
      </article>
      {isReply && (
        <FormCreate
          replyingTo={username}
          parentComment={parentComment !== "" ? parentComment : id}
          onSubmit={() => setIsReply(false)}
        />
      )}
    </div>
  );
}

export default Post;
