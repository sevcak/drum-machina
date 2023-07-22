import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "fcc",
      element: <App />
    }
  ],
  { basename: import.meta.env.DEV ? '/' : '/drum-machina/' }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
