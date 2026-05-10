import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "250px", objectFit: "contain" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text className="fw-bold text-danger">
          ${price}
        </Card.Text>

        <Button
          as={Link}
          to={`/product/${id}`}
          variant="success"
          className="mt-auto"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;