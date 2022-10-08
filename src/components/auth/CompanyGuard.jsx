import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("data")
// console.log('ssssss',user);
const CompanyGuard = ({children}) => {
    const context = useContext(AuthContext)
    // console.log('ffff',context.currentUser)
    if (user?.type !== 'company') {
        return <Navigate to="/" replace/>;
    }
    return children;
};

export default CompanyGuard;
