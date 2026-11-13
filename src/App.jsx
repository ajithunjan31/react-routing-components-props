import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Layout from "./components/ui/Layout";

let router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />
}

export default App
