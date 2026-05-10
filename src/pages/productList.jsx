import { useEffect, useState } from "react";
import { Col, Row, Spinner, Alert, Button } from "react-bootstrap";
import ProductCard from "../component/mainLayout/card/card";
import { getAllProduct, getProductByCategory, getCategory } from "../api/products";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            let res;
            if (category) {
                res = await getProductByCategory(category);
            } else {
                res = await getAllProduct();
            }
            setProducts(res.data);
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCategory().then(res => setCategories(res.data));
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [category]);

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
            
            <div className="mb-4 d-flex flex-wrap gap-2">
                <Button 
                    variant={category ? "outline-dark" : "dark"} 
                    onClick={() => setSearchParams({})}
                >
                    All
                </Button>
                {categories.map((cat, index) => (
                    <Button 
                        key={index} 
                        variant={category === cat ? "dark" : "outline-dark"} 
                        onClick={() => setSearchParams({ category: cat })}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

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