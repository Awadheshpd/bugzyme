import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
  { path: "/career", element: <Career /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/blogs", element: <Blogs /> },
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
