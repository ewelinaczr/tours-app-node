import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store/store.ts";
import "./styles/App.css";

import Tours from "./pages/Tours.tsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Cart from "./pages/Cart.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import TourDetails from "./features/TourDetails/TourDetails.tsx";
import Hotel from "./features/TourDetails/Hotel/Hotel.tsx";
import GeneralInfo from "./features/TourDetails/GeneralInfo/GeneralInfo.tsx";
import ProtectedRoute from "./ui/ProtectedRoute.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/tours" replace />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "tours/:id",
        element: <TourDetails />,
        children: [
          { path: "general-info", element: <GeneralInfo /> },
          { path: "hotel", element: <Hotel /> },
        ],
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </Provider>
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
