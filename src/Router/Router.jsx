import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Contact from "../Contact/Contact";
import Home from "../Layout/Homepage/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
])