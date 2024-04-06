import { useComments } from "../contexts/CommentsProvider";
import Item from "./Item";
import FormCreate from "./FormCreate";

function List() {
  const { comments } = useComments();

  return (
    <section className="container">
      <ul className="list">
        {comments.map((comment) => (
          <Item key={comment.id} comment={comment} />
        ))}
      </ul>
      <FormCreate />
    </section>
  );
}

export default List;
