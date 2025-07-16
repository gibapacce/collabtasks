import { NavLink } from "react-router-dom";
import { useAuth } from '../context';

export default function Navbar() {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <nav style={{
            display: "flex",
            gap: 16,
            padding: "1rem",
            background: "#f5f5f5",
            borderBottom: "1px solid #ddd"
        }}>
            <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                Dashboard
            </NavLink>
            <NavLink to="/projects" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                Projetos
            </NavLink>
            <NavLink to="/notifications" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                Notificações
            </NavLink>
            <NavLink to="/profile" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                Perfil
            </NavLink>
            <button onClick={logout} style={{ marginLeft: "auto" }}>
                Sair
            </button>
        </nav>
    );
}
