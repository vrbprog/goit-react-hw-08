import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import RestrictedRoute from "../components/RestrictedRoute";
import PrivateRoute from "../components/PrivateRoute";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
    import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

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
            <AppBar />
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/registartion"
                        element={<RegistrationPage />}
                    />
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
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
