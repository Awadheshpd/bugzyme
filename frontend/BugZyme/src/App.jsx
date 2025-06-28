import { Nav } from "react-bootstrap";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";

const routes = [
  { path: "/", element: <Home />, errorElement: <h2>No page found</h2> },
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
      <BrowserRouter>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact-us">Contact Us</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/career">Career</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/blogs">Blogs</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </BrowserRouter>

      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
