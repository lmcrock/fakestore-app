import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <Card.Body>
        <Card.Title>{product.title.slice(0, 40)}...</Card.Title>
        <Card.Text><strong>${product.price}</strong></Card.Text>
        <Button variant="primary" onClick={() => navigate(`/products/${product.id}`)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
