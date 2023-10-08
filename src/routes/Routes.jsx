import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import GamesDetails from "../pages/GamesDetails/GamesDetails";
import PrivateRoute from "./PrivateRoute";
import FeaturedGame from "../pages/Home/FeaturedGame";



const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/games.json')
            },
            {
                path: '/game/:id',
                element: <PrivateRoute><GamesDetails></GamesDetails></PrivateRoute>,
                loader: () => fetch('/games.json')
            },
            {
                path: '/feature',
                element: <FeaturedGame></FeaturedGame>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);
export default router;