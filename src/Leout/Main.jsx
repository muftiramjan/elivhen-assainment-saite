import { Outlet } from "react-router-dom";
import Fotter from "../pagase/Home/Sher/Footter/Fotter";
import Navbar from "../pagase/Home/Sher/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;