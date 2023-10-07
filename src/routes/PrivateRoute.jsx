import PropTypes from 'prop-types'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
  };