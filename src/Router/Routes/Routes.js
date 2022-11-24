import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Header from "../../Pages/Shared/Header/Header";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
        {
           path:'/' ,
           element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params})=>fetch(`https://genius-car-server-nine-smoky.vercel.app/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
    ]
  }
]) 

export default router;