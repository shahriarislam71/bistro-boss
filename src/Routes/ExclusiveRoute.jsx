import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, replace, useLocation } from 'react-router-dom';

const ExclusiveRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
};

export default ExclusiveRoute;