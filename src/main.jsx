import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Save from './Save'
import Home from './Home'
import ErrorPage from './errorPage.jsx'
import Recipe from './Recipe.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { DataProvider } from "./context/data.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/save',
//     element: <Save />,
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/save',
        element: <Save />,
      },
      {
        path: '/recipe',
        element: <Recipe />,
      },
      {
        path: '/recipe/:id',
        element: <Recipe />
      },
      {
        path: 'oldcontact',
        element: <Navigate to='/' />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
