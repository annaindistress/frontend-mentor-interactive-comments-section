import { useUser } from "../contexts/UserProvider";
import Plus from "../assets/icons/plus.svg?react";
import Minus from "../assets/icons/minus.svg?react";
import styles from "./Likes.module.css";
import { useComments } from "../contexts/CommentsProvider";

interface LikesProps {
  id: string;
  score: number;
}

function Likes({ id, score }: LikesProps) {
  const { likedPosts, dislikedPosts, addReaction, removeReaction } = useUser();
  const { updateComment } = useComments();
  const isLiked = likedPosts.includes(id);
  const isDisliked = dislikedPosts.includes(id);

  function handleReaction(value: number) {
    removeReaction(id, "like");
    removeReaction(id, "dislike");
    updateComment(id, value);
  }

  function handleLike() {
    const value = isDisliked ? 2 : isLiked ? -1 : 1;
    handleReaction(value);
    addReaction(id, "like");
  }

  function handleDislike() {
    const value = isLiked ? -2 : isDisliked ? 1 : -1;
    handleReaction(value);
    addReaction(id, "dislike");
  }

  return (
    <div className={styles.container}>
      <button
        className={[styles.button, isLiked ? styles.active : ""].join(" ")}
        onClick={handleLike}
      >
        <span className="sr-only">Like post</span>
        <Plus />
      </button>
      <span className={styles.score}>{score}</span>
      <button
        className={[styles.button, isDisliked ? styles.active : ""].join(" ")}
        onClick={handleDislike}
      >
        <span className="sr-only">Dislike post</span>
        <Minus />
      </button>
    </div>
  );
}

export default Likes;
