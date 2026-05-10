import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Spinner, Button, Badge } from "react-bootstrap";

import { getProductById } from "../api/products";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const fetchProduct = async () => {
        try {
            setIsLoading(true);
            const res = await getProductById(id);
            setProduct(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (isLoading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );
    }

    if (!product) return null;

    return (
        <Container className="py-5">
            <Button as={Link} to="/" variant="outline-dark" className="mb-4">
                &larr; Back to Products
            </Button>
            
            <Row className="align-items-center">
                <Col md={6} className="text-center mb-4 mb-md-0">
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
                    />
                </Col>
                
                <Col md={6}>
                    <h2 className="fw-bold mb-3">{product.title}</h2>
                    <Badge bg="secondary" className="mb-3 fs-6 px-3 py-2 text-capitalize">
                        {product.category}
                    </Badge>
                    
                    <h3 className="text-success fw-bold mb-4">
                        ${product.price}
                    </h3>
                    
                    <p className="text-muted lh-lg mb-4">
                        {product.description}
                    </p>
                    
                    <Button variant="dark" size="lg" className="w-100">
                        Add to Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
