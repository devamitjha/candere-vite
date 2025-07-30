import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router';

import Layout from './Layout';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import Jewellery from './pages/Jewellery';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration />
          <Layout />
        </>
      ),
      children: [
        { index: true, element: <Home /> },

        // Category listing
        { path: 'jewellery', element: <Jewellery /> },
        { path: 'jewellery/:catname', element: <ProductCategory /> },

        // Product details
        { path: '/:id', element: <Product /> },

        // Checkout
        {
          path: 'checkout',
          children: [
            { path: 'cart', element: <Cart /> },
            { path: 'shipping', element: <Shipping /> },
            { path: 'payment', element: <Payment /> },
          ],
        },

        // Fallback
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
