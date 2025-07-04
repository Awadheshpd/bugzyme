import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Services from "./pages/Services";

const routes = [
  {
    path: "bugzyme",
    element: <Layout />,
    errorElement: <h2>Page not found</h2>,
    children: [
      { path: "about", element: <About /> },
      { path: "home", element: <Home /> },
      { path: "career", element: <Career /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "blogs", element: <Blogs /> },
      { path: "services", element: <Services /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
