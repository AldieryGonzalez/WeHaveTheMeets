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
import "./index.css";
import CreateMeet from "./pages/CreateMeet.tsx";
import FindMeet from "./pages/FindMeet.tsx";
import Landing from "./pages/Landing.tsx";
import ConnectCal from "./pages/ConnectCal.tsx";
import { supabase } from "./utils/supabase.ts";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route path='/' element={<Landing />} />
            <Route path='/find' element={<FindMeet />} />
            <Route path='/create' element={<CreateMeet />} />
            <Route path='/connect-cal/:id' element={<ConnectCal />} />
            {/* <Route path='/link/:id' element={} />
            <Route path='/connect-cal/:id' element={} />
            <Route path='/times/:id' element={} />  */}
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
