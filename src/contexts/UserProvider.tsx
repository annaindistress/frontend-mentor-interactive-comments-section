import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Context {
  currentUser: string;
  likedPosts: string[];
  addLike(id: string): void;
  removeLike(id: string): void;
}

interface ProviderProps {
  children: ReactNode;
}

const UserContext = createContext<Context | null>(null);

function UserProvider({ children }: ProviderProps) {
  const currentUser = "juliusomo";
  const [likedPosts, setLikedPosts] = useLocalStorage<string[]>([], "likes");

  function addLike(postId: string) {
    if (!likedPosts.includes(postId)) {
      setLikedPosts((cur: string[]) => [...cur, postId]);
    }
  }

  function removeLike(postId: string) {
    if (likedPosts.includes(postId)) {
      setLikedPosts((cur: string[]) =>
        cur.filter((curItem) => curItem !== postId)
      );
    }
  }

  return (
    <UserContext.Provider
      value={{ currentUser, likedPosts, addLike, removeLike }}
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
