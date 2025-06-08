import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '16px' }}>Welcome to FakeStore!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
        Browse our collection of mock products or add your own test item to see how it works.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link to="/products">
          <Button variant="primary">View Products</Button>
        </Link>
        <Link to="/add-product">
          <Button variant="success">Add a Product</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
