import React, { useContext } from 'react';
import { AoutContext } from '../provaider/AoutProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PraivhetRout = ({ children }) => {

    const { user, loding } = useContext(AoutContext);
const location =useLocation();
console.log(location.pathname)
    if (loding) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/Login" replace></Navigate>
};

export default PraivhetRout;