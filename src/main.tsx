import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import "./index.css";
import ConnectCal from "./pages/ConnectCal.tsx";
import CreateMeet from "./pages/CreateMeet.tsx";
import FindMeet from "./pages/FindMeet.tsx";
import Landing from "./pages/Landing.tsx";
import Meet from "./pages/Meet.tsx";
import { supabase } from "./utils/supabase.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route path='/' element={<Landing />} />
            <Route path='/find' element={<FindMeet />} />
            <Route path='/create' element={<CreateMeet />} />
            <Route path='/connect-cal/:id' element={<ConnectCal />} />
            <Route path='/meet/:id' element={<Meet />} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </SessionContextProvider>
    </React.StrictMode>,
);
