import { useEffect, useState } from "react";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import ProductCard from "../component/mainLayout/card/card";
import { getAllProduct } from "../api/products";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await getAllProduct();
      setProducts(res.data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        {error}
      </Alert>
    );
  }

  return (
    <>
      <h1 className="mb-4">All Products</h1>
      <Row className="g-4">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsList;