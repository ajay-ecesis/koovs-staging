import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// private Route for checking if user is authenticated
const PrivateRoute = ({ children }) => {

    const user = useSelector((state) => state.user);
    
    return user?.isLoggedIn?{children}: <Navigate to="/signup/login"/>

};

export default PrivateRoute;
