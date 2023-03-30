import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourite, Gallery, Home } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './globalStyles';
import { Layout } from './components';
import { FavouriteProvider } from './context';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/favourite',
        element: <Favourite />
      }
    ]
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <FavouriteProvider>
        <RouterProvider router={router} />
      </FavouriteProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
