import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";

export default function App() {
  // add dynamic route to the list route below
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        // when page is loaded the Home page will be rendered
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        {  path: "/list",  element: <List /> },
        // whatever item is click they will come automatically after list in the URL
        {  path: "/list/:itemId",  element: <ItemDetails /> }

      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
