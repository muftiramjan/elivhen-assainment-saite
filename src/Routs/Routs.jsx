import { createBrowserRouter } from "react-router-dom";
import Main from "../Leout/Main";
import Home from "../pagase/Home/Home";
import Login from "../pagase/Login/Login";
import SingUp from "../pagase/singup/SingUp";
import Checout from "../pagase/cecoutpagase/Checout";
import Orders from "../pagase/orders/Orders";
import PraivhetRout from "./PraivhetRout";
import Error from "../pagase/Error/Error";
import TabsCard from "../pagase/Home/TabsCard";
// import About from "../pagase/Home/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/tabs`),
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "/singup",
                element: <SingUp></SingUp>
            },
            // {
            //     path: "/jobs",
            //     element: <TabsCard></TabsCard>,
                
            // },
            {
                path: "/checout/:id",
                element: <PraivhetRout><Checout></Checout></PraivhetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/carServes/${params.id}`)
            },
            {
                path: "/orders",
                element: <PraivhetRout>
                          <Orders></Orders>
                        </PraivhetRout>

            },

        ]
    },
]);
export default router;