/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./basicCard.css";

function BasicCard({ image, title, summary }) {
  // const removeTags = summary.replace(/(<([^>]+)>)/gi, "").trim();

  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={image} className="cardImage" />
      <Card.Body className="cardBody">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="cardSummary">{summary}</Card.Text>
        <Button variant="primary" className="cardButton">
          <img src="../../public/plus.png" alt="" className="cardImg" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
