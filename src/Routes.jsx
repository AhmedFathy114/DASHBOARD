import ErrorPage from "./pages/Error";
import DashHomePage from "./pages/Home";
import LoginPage from "./pages/Signin";
import WithDashLayout from "./utils/RouterHelper";
import ProtectedRoute from "./utils/ProtectedRoute";
import ServicePage from "./pages/service";
import WorkerPage from "./pages/Worker";
import CustomerPage from "./pages/Customer";
import BookService from "./pages/BookService";
import CreatAdmins from "./pages/Admins";
const routes = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/dashboards",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<DashHomePage />)}
            </ProtectedRoute>
        )
    },
    {
        path: "/service",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<ServicePage/>)}
            </ProtectedRoute>
        )
    },
    {
         path: "/worker",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<WorkerPage/>)}
            </ProtectedRoute>
        )
    },
    {
         path: "/customer",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<CustomerPage/>)}
            </ProtectedRoute>
        )
    },
    {
        path: "/bookservice",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<BookService/>)}
            </ProtectedRoute>
        )
    },
    {
        path: "/createadmin",
        element: (
            <ProtectedRoute>
                {WithDashLayout(<CreatAdmins/>)}
            </ProtectedRoute>
        )
    },
    {
        path: "*",
        element: <ErrorPage /> 
    }
];

export { routes }
