import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { SocketProvider } from '../context/SocketContext.jsx'
import { store } from "../store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SocketProvider>
            <KindeProvider
                clientId={import.meta.env.VITE_CLIENT_ID}
                domain={import.meta.env.VITE_DOMAIN}
                redirectUri={import.meta.env.VITE_REDIRECT_URI}
                logoutUri={import.meta.env.VITE_LOGOUT_URI}
            >
                <Provider store={store}>
                    <App />
                </Provider>
            </KindeProvider>
        </SocketProvider>
    </StrictMode>
);
