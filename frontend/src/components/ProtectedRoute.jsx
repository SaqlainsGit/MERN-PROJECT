import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    return user && user.role==="ADMIN" ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;