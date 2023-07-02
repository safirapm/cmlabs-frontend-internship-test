import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Components
import NavbarPage from "./components/NavbarPage/NavbarPage";
import Footer from "./components/Footer/Footer";

// Pages
import AllCategories from "./Pages/AllCategories/AllCategories";
import Home from "./Pages/Home/Home";
import FilterCategory from "./Pages/FilterCategory/FilterCategory";
import MealDetails from "./Pages/MealDetails/MealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavbarPage />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: "Page Not Found",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:i",
        element: <FilterCategory />,
      },
      {
        path: "/details/:i",
        element: <MealDetails />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
