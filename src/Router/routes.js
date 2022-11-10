import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/pages/AddService/AddService";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import MyReviews from "../components/pages/MyReviews/MyReviews";
import Services from "../components/pages/Services/Services";
import ServiceDetails from "../components/pages/ServieDetails/ServiceDetails";
import Update from "../components/pages/Update/Update";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/service"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default routes;
