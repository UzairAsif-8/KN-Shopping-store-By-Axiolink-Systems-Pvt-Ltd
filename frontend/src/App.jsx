import { RouterProvider } from 'react-router-dom';
import {
  AuthProvider,
  ProductProvider,
  CartProvider,
  WishlistProvider,
  OrderProvider,
  UIProvider,
  ThemeProvider,
} from './context';
import router from './routes';

const App = () => (
  <ThemeProvider>
    <UIProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <RouterProvider router={router} />
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </UIProvider>
  </ThemeProvider>
);

export default App;
