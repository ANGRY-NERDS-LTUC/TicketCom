import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Guard = ({children, type = 'client'}) => {
    const context = useContext(AuthContext)
    console.log(context.currentUser)
    if (!context.currentUser?.user?.isVerify) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default Guard;
