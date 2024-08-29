import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/route.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>,
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProviders>
)
