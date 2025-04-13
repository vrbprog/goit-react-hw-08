import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function RestrictedRoute({ component, redirectTo }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log("LoggedIn for Restrict", isLoggedIn);

    return <>{isLoggedIn ? <Navigate to={redirectTo} /> : component}</>;
}
