import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <App />
            <Toaster />
        </Provider>
        </BrowserRouter>
    </StrictMode>
);
