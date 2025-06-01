import { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image: 'https://via.placeholder.com/150', // placeholder image for now
    };

    axios.post('https://fakestoreapi.com/products', newProduct)
      .then(() => {
        setSuccess(true);
        setError('');
        // Clear form fields
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
      })
      .catch(() => {
        setError('Failed to add product.');
        setSuccess(false);
      });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Add New Product</h2>

      {success && <Alert variant="success">Product created successfully (API responded with success).</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
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
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">Add Product</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
