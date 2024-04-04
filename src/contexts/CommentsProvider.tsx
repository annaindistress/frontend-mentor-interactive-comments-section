import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import commentsData from "../assets/comments";

interface Context {
  comments: Comment[];
  addComment(data: OriginalComment): void;
}

interface ProviderProps {
  children: ReactNode;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  username: string;
}

interface ReplyComment extends Comment {
  replyingTo: string;
}

interface OriginalComment extends Comment {
  replies: ReplyComment[] | [];
}

const CommentsContext = createContext<Context | null>(null);

function CommentsProvider({ children }: ProviderProps) {
  const [comments, setComments] = useLocalStorage<OriginalComment[]>(
    commentsData,
    "comments"
  );

  function addComment(data: OriginalComment) {
    setComments((cur: OriginalComment[]) => [...cur, data]);
  }

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
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
