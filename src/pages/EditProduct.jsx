import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const product = response.data;
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setCategory(product.category);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product.');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image: 'https://via.placeholder.com/150', // keeping image simple
    };

    axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct)
      .then(() => {
        setSuccess(true);
        setError('');
      })
      .catch(() => {
        setError('Failed to update product.');
        setSuccess(false);
      });
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Edit Product</h2>

      {success && <Alert variant="success">Product updated successfully (API responded with success).</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            step="0.01"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">Update Product</Button>
          <Button variant="secondary" onClick={() => navigate('/products')}>Cancel</Button>
        </div>
      </Form>
    </Container>
  );
}

export default EditProduct;
