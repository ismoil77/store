import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import LogIn from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Layout from "./Layout/Layout";
import Products from "./Pages/Products/Products";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import AuthCheck from "./utils/AuthChek";
import ProtectedRout from "./utils/ProtectedTout";
import AboutTovar from "./Pages/abouts/AboutTovar";
import CartTovar from "./Pages/Cart/CartTovar";
import NotLogin from "./Pages/NotLogin/NotLogin";



function App()
{
  // useEffect(() => {
  //   AOS.init();
  // }, [])

  const router = createBrowserRouter([
    
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element:   <Layout /> ,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "product",
          element: <Products />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "cartTovar",
          element: <CartTovar />,
        },
        {
          path: "notLogin",
          element: <NotLogin />,
        },
        
        {
          path: ":id",
          element: <AboutTovar />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
