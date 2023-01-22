import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cart from "../../Pages/Cart/Cart";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/product",
                //loader:()=>fetch("fakeData.json"),
                element:<Products></Products>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            }
        ]
    }
])

export default router;