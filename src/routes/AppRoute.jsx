import { Route, Routes } from "react-router-dom";
import Home from "../App.jsx"
import About from "../About.jsx";
import Contact from "../Contact.jsx";
import Login from "../Pages/auth/Login.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Register from "../Pages/auth/Register.jsx";
import Dashboard from "../Pages/dashboard/Dashboard.jsx";
import Plan from "../Pages/dashboard/Plan.jsx";
import TodoList from "../pages/dashboard/TodoList";
import TodoListDetail from "../pages/dashboard/TodoListDetail";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

function AppRoute() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/todo-list" element={<TodoList />} />
                <Route path="/todo-list-detail/:id" element={<TodoListDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/plans" element={<Plan />} />
            </Route>
        </Routes>
    );
}


export default AppRoute;