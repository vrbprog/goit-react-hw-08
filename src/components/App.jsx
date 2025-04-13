import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Navigation from "./Navigation/Navigation";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import RestrictedRoute from "../components/RestrictedRoute";
import PrivateRoute from "../components/PrivateRoute";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <strong>Getting user data please wait...</strong>
    ) : (
        <div>
            <Navigation />
            {/* <Suspense fallback={<h1>Loading...</h1>}> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/registartion" element={<RegistrationPage />} />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            component={<LoginPage />}
                            redirectTo="/contacts"
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute
                            component={<ContactsPage />}
                            redirectTo="/login"
                        />
                    }
                />
            </Routes>
            {/* </Suspense> */}
        </div>
    );
}
