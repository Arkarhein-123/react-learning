import Home from "./pages/Home";
import Error from "./pages/Error";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
        },
        {
            path: "/profiles",
            element: <Profiles />,
            children: [
                {
                    path: ":profileId",
                    element: <Profile />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={route} />
        </div>
    );
}
