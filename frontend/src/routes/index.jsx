import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { PageSkeleton } from '../components/ui/Skeleton';

const HomePage = lazy(() => import('../pages/HomePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const NewArrivalsPage = lazy(() => import('../pages/NewArrivalsPage'));
const CollectionsPage = lazy(() => import('../pages/CollectionsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const JournalPage = lazy(() => import('../pages/JournalPage'));
const JournalArticlePage = lazy(() => import('../pages/JournalArticlePage'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));
const BrandsPage = lazy(() => import('../pages/BrandsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const InfoPage = lazy(() => import('../pages/InfoPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const withSuspense = (Component, props = {}) => (
  <Suspense fallback={<PageSkeleton />}>
    <Component {...props} />
  </Suspense>
);

const info = (pageKey) => withSuspense(InfoPage, { pageKey });

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: withSuspense(NotFoundPage),
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'shop', element: withSuspense(ShopPage) },
      { path: 'new-arrivals', element: withSuspense(NewArrivalsPage) },
      { path: 'collections', element: withSuspense(CollectionsPage) },
      { path: 'collections/:slug', element: withSuspense(CollectionsPage) },
      { path: 'products/:slug', element: withSuspense(ProductDetailPage) },
      { path: 'journal', element: withSuspense(JournalPage) },
      { path: 'journal/:slug', element: withSuspense(JournalArticlePage) },
      { path: 'brands', element: withSuspense(BrandsPage) },
      { path: 'wishlist', element: withSuspense(WishlistPage) },
      { path: 'account', element: withSuspense(AccountPage) },
      { path: 'checkout', element: withSuspense(CheckoutPage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: 'ritual-guide', element: info('ritual-guide') },
      { path: 'sustainability', element: info('sustainability') },
      { path: 'shipping', element: info('shipping') },
      { path: 'returns', element: info('returns') },
      { path: 'faq', element: info('faq') },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);

export default router;
