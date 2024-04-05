import { useUser } from "../contexts/UserProvider";
import Plus from "../assets/icons/plus.svg?react";
import Minus from "../assets/icons/minus.svg?react";
import styles from "./Likes.module.css";

interface LikesProps {
  id: string;
  score: number;
}

function Likes({ id, score }: LikesProps) {
  const { likedPosts, dislikedPosts, addReaction, removeReaction } = useUser();
  const isLiked = likedPosts.includes(id);
  const isDisliked = dislikedPosts.includes(id);

  function handleLike() {
    if (!isLiked) {
      removeReaction(id, "dislike");
      addReaction(id, "like");
    } else {
      removeReaction(id, "like");
    }
  }

  function handleDislike() {
    if (!isDisliked) {
      removeReaction(id, "like");
      addReaction(id, "dislike");
    } else {
      removeReaction(id, "dislike");
    }
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
