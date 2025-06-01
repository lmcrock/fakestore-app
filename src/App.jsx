import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import AddProduct from './pages/AddProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
