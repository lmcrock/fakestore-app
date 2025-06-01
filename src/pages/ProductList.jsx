import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-3 text-center">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Product Listing</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} lg={3} sm={6} xs={12} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
