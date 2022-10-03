import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("data")

const Guard = ({children, type = 'client'}) => {
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default Guard;
