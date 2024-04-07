import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_KEY as string,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <App />
        </SessionContextProvider>
    </React.StrictMode>,
);
