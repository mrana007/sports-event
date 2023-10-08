import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import GamesDetails from "../pages/GamesDetails/GamesDetails";
import PrivateRoute from "./PrivateRoute";
import FeaturedGame from "../pages/Home/FeaturedGame";
import ContactUs from "../pages/Home/ContactUs";
import Blog from "../pages/Blog/Blog";
import UserReview from "../pages/UserReview";



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
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
            },
            {
                path: '/feature',
                element: <PrivateRoute><FeaturedGame></FeaturedGame></PrivateRoute>,
                
            },
            {
                path: '/review',
                element: <UserReview></UserReview>,
                
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>,
                
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