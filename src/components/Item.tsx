import { Comment } from "../types/CommentTypes";
import { useComments } from "../contexts/CommentsProvider";
import Post from "./Post";
import styles from "./Item.module.css";

interface CommentsItemProps {
  comment: Comment;
}

function Item({ comment }: CommentsItemProps) {
  const { comments } = useComments();
  const replies =
    comments.filter(
      (commentItem) => commentItem.parentComment === comment.id
    ) || [];

  return (
    <>
      {comment.parentComment === "" && (
        <li className={styles.item}>
          <Post
            id={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            score={comment.score}
            username={comment.username}
          />
          {replies.length !== 0 && (
            <ul className="list list--inner">
              {replies.map((reply) => (
                <li className={styles.item} key={reply.id}>
                  <Post
                    id={reply.id}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    username={reply.username}
                    replyingTo={reply.replyingTo}
                    parentComment={reply.parentComment}
                  />
                </li>
              ))}
            </ul>
          )}
        </li>
      )}
    </>
  );
}

export default Item;
