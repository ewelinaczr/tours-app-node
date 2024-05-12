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
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import TourDetails from "./features/TourDetails/TourDetails.tsx";
import Hotel from "./features/TourDetails/Hotel/Hotel.tsx";
import GeneralInfo from "./features/TourDetails/GeneralInfo/GeneralInfo.tsx";

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
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
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
