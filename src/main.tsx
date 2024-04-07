import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import CreateMeet from "./pages/CreateMeet.tsx";
import FindMeet from "./pages/FindMeet.tsx";
import Landing from "./pages/Landing.tsx";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_KEY as string,
);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route path='/' element={<Landing />} />
            <Route path='/find' element={<FindMeet />} />
            <Route path='/create' element={<CreateMeet />} />
            {/* <Route path='/confirm-meet' element={} />
            <Route path='/link/:id' element={} />
            <Route path='/connect-cal/:id' element={} />
            <Route path='/times/:id' element={} /> */}
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <RouterProvider router={router} />
        </SessionContextProvider>
    </React.StrictMode>,
);
