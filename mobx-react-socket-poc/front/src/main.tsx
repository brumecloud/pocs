import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "mobx-react";
import store from "./stores";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider {...store}>
            <App />
        </Provider>
    </React.StrictMode>
);
