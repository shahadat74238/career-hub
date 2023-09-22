import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/Pages/ErrorPage/Errorpage";
import Statistics from "./Components/Pages/Statistics/Statistics";
import Jobs from "./Components/Pages/Jobs/Jobs";
import Applied from "./Components/Pages/Applied/Applied";
import Blogs from "./Components/Pages/Blogs/Blogs";
import JobDetails from "./Components/Pages/Jobs/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/jobs_details/:id",
        element: <JobDetails />,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
