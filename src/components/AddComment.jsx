import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODJiMjJjMGNjNDUzMDAwMTU0N2M2NTgiLCJpYXQiOjE3NDc2NTc0MDgsImV4cCI6MTc0ODg2NzAwOH0.1ELjeUhtJd0l6WrOxTKE9jfnCuDzLtVyF5fiwB6gjag",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setComment({
          comment: "",
          rate: 1,
          elementId: props.asin,
        });
        props.fetchPass();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-0">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Add Comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
