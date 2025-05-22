import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchComments = async (e) => {
    console.log("fetching...");
    setIsLoading(true);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODJiMjJjMGNjNDUzMDAwMTU0N2M2NTgiLCJpYXQiOjE3NDc2NTc0MDgsImV4cCI6MTc0ODg2NzAwOH0.1ELjeUhtJd0l6WrOxTKE9jfnCuDzLtVyF5fiwB6gjag",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const comData = await response.json();
        setComments(comData);
      } else {
        throw new Error("Errore nel reperimento dei commenti");
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mt-5">
      {isLoading ? (
        <Spinner animation="border" variant="danger" size="lg" />
      ) : (
        <CommentList fetchPass={fetchComments} comments={comments.filter((comment) => comment.elementId === props.asin)} />
      )}
      {/* <AddComment asin={props.asin} fetchPass={fetchComments} /> */}
    </div>
  );
};
export default CommentArea;
