import { Route, Routes } from "react-router-dom";
import Home from "../App.jsx"
import About from "../About.jsx";
import Contact from "../Contact.jsx";
import Login from "../Pages/auth/Login.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Product from "../Pages/Product.jsx";

function AppRoute() {
    return (
        // <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/About" element={<About />} />
        //     <Route path="/Contact" element={<Contact />} />
        // </Routes>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/Dashboard" element={<Home />} />
            </Route>
            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        </Routes>
    );
}


export default AppRoute;