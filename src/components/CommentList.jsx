import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { TrashFill } from "react-bootstrap-icons";

const CommentList = (props) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteComment = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODJiMjJjMGNjNDUzMDAwMTU0N2M2NTgiLCJpYXQiOjE3NDc2NTc0MDgsImV4cCI6MTc0ODg2NzAwOH0.1ELjeUhtJd0l6WrOxTKE9jfnCuDzLtVyF5fiwB6gjag",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const deleteComment = await response.json();
        props.fetchPass();
      } else {
        throw new Error("Errore nel eliminazione del commento");
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <ListGroup>
      {props.comments.map((comment) => (
        <ListGroup.Item key={`comLis-${comment._id}`} className="d-flex align-items-center p-4">
          <SingleComment id={`sCom-${comment._id}`} comment={comment} />
          {/* <Button variant="danger" size="sm" className="ms-auto" onClick={() => deleteComment(comment._id)}>
            <TrashFill />
          </Button> */}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CommentList;
