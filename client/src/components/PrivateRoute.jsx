
import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
const token = localStorage.getItem("token") || "";
const PrivateRoute = ({ children }) => {
    // const { isAuth } = useContext(AuthContext)
    return token ? children : <Navigate to={"/login"} />
}
export default PrivateRoute;