import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './component/mainLayout/mainLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsList from './pages/productList';
import ProductDetails from './pages/productDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index:true,  element:<ProductsList/>},
      {path:'product/:id', element:<ProductDetails/>},
      {path:'cart', element:<Cart/>},
      {path:'*',elment:<NotFound/>}

  
    ],
  },
]);
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
