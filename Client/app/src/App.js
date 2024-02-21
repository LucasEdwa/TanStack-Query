import { Link, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';

function App() {
  return (
   <main>
      <nav className="px-4 py-2 flex gap-4 underline ">
        <Link className="hover:text-red-500" to="/">Home</Link>
        <Link className="hover:text-red-500" to="/add-product">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
   </main>
  );
}

export default App;
