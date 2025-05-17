import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index";

export function MyRoutes() {
    const { user } = UserAuth();
    return (
        <Routes>
            {/* HOME QUEDA PROTEGIDO */}
            <Route element = {<ProtectedRoute user={user} redirecTo="/login" />} >
            {/* Si no está logueado, redirigir a la página de login */}
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes >
    );
}