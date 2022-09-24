import React from "react";
import { isAuthenticated } from "./index";
import { Navigate } from 'react-router-dom';


export { PrivateRoute };

function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/signin"/>
    }
    return children;
}

// function userRoute({ children }) {
//     if (!isAuthenticated().type==='client') {
//         return <Navigate to="/signin"/>
//     }
//     return children;
// }

// function companyRoute({ children }) {
//     if (!isAuthenticated().type==='company') {
//         return <Navigate to="/signin"/>
//     }
//     return children;
// }

// function adminRoute({ children }) {
//     if (!isAuthenticated().type==='client'&&!isAuthenticated().role==='admin') {
//         return <Navigate to="/signin"/>
//     }
//     return children;
// }