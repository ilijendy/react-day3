import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1 fw-bold text-danger">
        404
      </h1>

      <h2>Page Not Found</h2>

      <p className="text-muted">
        The page you are looking for does not exist.
      </p>

      <Button as={Link} to="/" variant="dark">
        Back Home
      </Button>
    </Container>
  );
};

export default NotFound;