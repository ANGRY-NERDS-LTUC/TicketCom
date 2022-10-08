import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("data")
// console.log('ss',user);
const Guard = ({children, type = 'client'}) => {
    if (!user) {
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default Guard;
