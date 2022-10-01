import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const CompanyGuard = ({children}) => {
    const context = useContext(AuthContext)
    console.log(context.currentUser)
    if (context.currentUser?.user.type !== 'company') {
        return <Navigate to="/" replace/>;
    }
    return children;
};

export default CompanyGuard;
