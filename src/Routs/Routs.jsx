import { createBrowserRouter } from "react-router-dom";
import Main from "../Leout/Main";
import Home from "../pagase/Home/Home";
import Login from "../pagase/Login/Login";
import SingUp from "../pagase/singup/SingUp";
import Checout from "../pagase/cecoutpagase/Checout";
import PraivhetRout from "./PraivhetRout";
import Error from "../pagase/Error/Error";
import Carditels from "../pagase/Home/saeveses/Carditels";
import Myorder from "../pagase/orders/Myorder";
import Update from "../pagase/orders/Update";
import Foods from "../pagase/Foods";
import Foodditals from "../pagase/Foodditals";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
              
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "/singup",
                element: <SingUp></SingUp>
            },
            {
                path: "/Foods",
                element: <Foods></Foods>
            },
            {
                path: "/Foodditals/:id",
                element: <Foodditals></Foodditals>,
                loader: ({ params }) => fetch(`https://car-doctor-server-nine-gilt.vercel.app/orders/${params.id}`)
            },
            {
                path: "/update",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://car-doctor-server-nine-gilt.vercel.app/orders/${params.id}`)

            },
            {
                path: "/myorder",
                element: <PraivhetRout><Myorder></Myorder></PraivhetRout>
            },
            {
                path: "/checout/:id",
                element: <PraivhetRout><Checout></Checout></PraivhetRout>,
                loader: ({ params }) => fetch(`https://car-doctor-server-nine-gilt.vercel.app/carServes/${params.id}`)
            },
            {
                path: "/checoutt/:id",
                element: <PraivhetRout><Carditels></Carditels></PraivhetRout>,
                loader: ({ params }) => fetch(`https://car-doctor-server-nine-gilt.vercel.app/carServes/${params.id}`)
            },
            

        ]
    },
]);
export default router;