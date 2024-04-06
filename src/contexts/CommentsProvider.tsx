import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Comment } from "../types/CommentTypes";
import commentsData from "../assets/comments";

interface Context {
  comments: Comment[];
  addComment(data: Comment): void;
  deleteComment(id: string): void;
  updateComment(id: string, payload: string | number): void;
}

interface ProviderProps {
  children: ReactNode;
}

const CommentsContext = createContext<Context | null>(null);

function CommentsProvider({ children }: ProviderProps) {
  const [comments, setComments] = useLocalStorage<Comment[]>(
    commentsData,
    "comments"
  );

  function addComment(data: Comment) {
    setComments((cur: Comment[]) => [...cur, data]);
  }

  function deleteComment(id: string) {
    setComments((cur: Comment[]) =>
      cur.filter((item: Comment) => item.id !== id)
    );
  }

  function updateComment(id: string, payload: string | number) {
    const newData = comments.map((comment: Comment) => {
      if (comment.id === id) {
        if (typeof payload === "string") {
          comment.content = payload;
        }

        if (typeof payload === "number") {
          comment.score += payload;
        }
      }
      return comment;
    });
    setComments(newData);
  }

  return (
    <CommentsContext.Provider
      value={{ comments, addComment, deleteComment, updateComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

function useComments() {
  const context = useContext(CommentsContext);

  if (!context)
    throw new Error("CommentsContext was used outside CommentsProvider");

  return context;
}

export { CommentsProvider, useComments };
