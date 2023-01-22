import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { CartProvider } from 'react-use-cart';
import Product from './Pages/Products/Product';
import Cart from './Pages/Cart/Cart';


function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
    <CartProvider>
    <RouterProvider router={router}>

    </RouterProvider>
    </CartProvider>
    
    </div>
  );
}

export default App;
