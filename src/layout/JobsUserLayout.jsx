import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';

import { NavBar } from "../components/NavBar";

export function JobsUserLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <ToastContainer />
        </>
    );
}