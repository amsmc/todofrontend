import { useEffect } from "react";;
import { useLocation } from "react-router-dom";

function TitleRoute() {
    const location = useLocation();

        useEffect(() => {
            const titles = {
                "/": "Home",
                "/about": "About",
                "/contact": "Contact",
                "/login": "Login",
            }

            document.titles = titles[location.pathname];
        }, [location]);

    return null;
}

export default TitleRoute;