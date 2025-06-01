import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Product not found.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this product?')) {
      axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => {
          alert('Product deleted (API responded with success).');
          navigate('/products');
        })
        .catch(() => {
          alert('Error deleting product.');
        });
    }
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-3 text-center">{error}</Alert>;

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>

          <div className="d-flex gap-2">
            <Button variant="danger" onClick={handleDelete}>
              Delete Product
            </Button>
            <Button variant="secondary" onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
