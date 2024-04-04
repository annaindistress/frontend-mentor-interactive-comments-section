import { useComments } from "../contexts/CommentsProvider";
import { useUser } from "../contexts/UserProvider";
import Form from "./Form";

function Comments() {
  const { currentUser, likedPosts, addLike, removeLike } = useUser();
  const { comments } = useComments();

  return (
    <section className="container">
      <ul className="list"></ul>
      <Form />
    </section>
  );
}

