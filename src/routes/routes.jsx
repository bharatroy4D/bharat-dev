import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../Pages/banner/Banner";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

    }
])