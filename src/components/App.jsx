import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Navigation from "./Navigation/Navigation";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import RestrictedRoute from "../components/RestrictedRoute";
import PrivateRoute from "../components/PrivateRoute";
import { Suspense } from "react";


export default function App() {
    return (
        <div>
            <Navigation />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/login" element={<LoginPage />} /> */}
                    <Route path="/login" element={
                        <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
                    }/>
                    <Route path="/registartion" element={<RegistrationPage />} />
                    <Route path="/contacts" element={
                        <PrivateRoute component={<ContactsPage />} redirectTo="/" />
                    }/>
                </Routes>
            </Suspense>
        </div>
    );
}
