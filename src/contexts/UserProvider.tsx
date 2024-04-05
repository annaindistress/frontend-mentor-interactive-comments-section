import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Context {
  currentUser: string;
  likedPosts: string[];
  dislikedPosts: string[];
  addReaction(id: string, type: string): void;
  removeReaction(id: string, type: string): void;
}

interface ProviderProps {
  children: ReactNode;
}

const UserContext = createContext<Context | null>(null);

function UserProvider({ children }: ProviderProps) {
  const currentUser = "juliusomo";
  const [likedPosts, setLikedPosts] = useLocalStorage<string[]>([], "likes");
  const [dislikedPosts, setDislikedPosts] = useLocalStorage<string[]>(
    [],
    "dislikes"
  );

  function addReaction(postId: string, type: string) {
    if (type === "like") {
      if (!likedPosts.includes(postId)) {
        setLikedPosts((cur: string[]) => [...cur, postId]);
      }
    }

    if (type === "dislike") {
      if (!dislikedPosts.includes(postId)) {
        setDislikedPosts((cur: string[]) => [...cur, postId]);
      }
    }
  }

  function removeReaction(postId: string, type: string) {
    if (type === "like") {
      if (likedPosts.includes(postId)) {
        setLikedPosts((cur: string[]) =>
          cur.filter((curItem) => curItem !== postId)
        );
      }
    }

    if (type === "dislike") {
      if (dislikedPosts.includes(postId)) {
        setDislikedPosts((cur: string[]) =>
          cur.filter((curItem) => curItem !== postId)
        );
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        likedPosts,
        dislikedPosts,
        addReaction,
        removeReaction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("UserContext was used outside UserProvider");

  return context;
}

export { UserProvider, useUser };
