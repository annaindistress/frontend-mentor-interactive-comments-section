import { useComments } from "../contexts/CommentsProvider";
import Item from "./Item";
import Form from "./Form";

function List() {
  const { comments } = useComments();

  return (
    <section className="container">
      <ul className="list">
        {comments.map((comment) => (
          <Item key={comment.id} comment={comment} />
        ))}
      </ul>
      <Form />
    </section>
  );
}

export default List;
