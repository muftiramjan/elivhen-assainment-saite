import { createBrowserRouter } from "react-router-dom";
import Main from "../Leout/Main";
import Home from "../pagase/Home/Home";
import Login from "../pagase/Login/Login";
import SingUp from "../pagase/singup/SingUp";
import PraivhetRout from "./PraivhetRout";
import Error from "../pagase/Error/Error";
import Update from "../pagase/orders/Update";
import Foods from "../pagase/Foods";
import Foodditals from "../pagase/Foodditals";
import AddFood from "../pagase/AddFood/AddFood";
import MyFoodRequest from "../pagase/orders/MyFoodRequest";
import ManageFood from "../pagase/orders/ManageFood";
import CardDetails from "../pagase/Home/saeveses/CardDetails";
import MeetOurTeam from "../pagase/Home/MeetOurTeam/MeetOurTeam";
import RequestFood from "../pagase/Request/RequestFood";


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
                path: "/singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "/Foods",
                element: <Foods></Foods>
            },
            {
                path: "/ManageFood",
                element: <ManageFood></ManageFood>
            },
            {
                path: "/Foodditals/:id",
                element: <Foodditals></Foodditals>,
                loader: ({ params }) => fetch(`http://localhost:5000/available/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleOrders/${params.id}`)

            },
            
            {
                path: "/MyFoodRequest",
                element: <PraivhetRout><MyFoodRequest></MyFoodRequest></PraivhetRout>
            },
            {
                path: "/AddFood",
                element: <PraivhetRout><AddFood></AddFood></PraivhetRout>,
                loader: () => fetch(`http://localhost:5000/carServes`)
            },
            {
                path: "/requestFood/:id",
                element: <RequestFood></RequestFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleOrders/${params.id}`)
            },
            {
                path: "/AddFood/:id",
                element: <PraivhetRout><AddFood></AddFood></PraivhetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/carServes/${params.id}`)
            },
            {
                path: "/checoutt/:id",
                element: <PraivhetRout><CardDetails></CardDetails></PraivhetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleOrders/${params.id}`)
            },
            
        ]
    },
]);
export default router;