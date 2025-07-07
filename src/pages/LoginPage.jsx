import React, { useState } from "react";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!email || !password) {
            toast.error("Preencha todos os campos.");
            return false;
        }
        // Validação simples de email
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            toast.error("Digite um e-mail válido.");
            return false;
        }
        if (password.length < 6) {
            toast.error("A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        setTimeout(() => { // Simula requisição
            const success = login(email, password);
            setLoading(false);
            if (!success) {
                toast.error("Email ou senha inválidos.");
            } else {
                toast.success("Login realizado com sucesso!");
                // Redirecionar
                setTimeout(() => navigate('/projects'), 1200);
            }
        }, 800);
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "2rem auto", display: "flex", flexDirection: "column", gap: 12 }}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
            </form>
            <ToastContainer position="top-center" autoClose={2500} />
        </>
    );
}