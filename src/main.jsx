import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import {

  RouterProvider,
} from "react-router-dom";

import router from './Routs/Routs';
import AoutProvider from './provaider/AoutProvider';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AoutProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AoutProvider>
      </QueryClientProvider>,
    </React.StrictMode>,
  </div>
)
