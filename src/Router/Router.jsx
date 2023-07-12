import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Contact from "../Contact/Contact";
import Home from "../Layout/Homepage/Home";
import Services from "../Services/Services";
import ErrorPage from "../ErrorPage";

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
            },
            {
                path: 'services',
                element: <Services/>
            },
<<<<<<< HEAD
        ],
        errorElement: <ErrorPage/>
=======
        ]
>>>>>>> 0acf9e3c8be214332d154df7cdd9738ea5d7f21a
    }
])