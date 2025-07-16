import React, { useState } from "react";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { Box, TextField, Button, Typography, CircularProgress, Paper } from "@mui/material";

export default function RegisterPage() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!email || !password) {
            toast.error("Preencha todos os campos.");
            return false;
        }
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
        setTimeout(() => {
            const result = register(email, password);
            setLoading(false);
            if (!result) {
                toast.error("Preencha todos os campos corretamente.");
            } else {
                toast.success("Registro realizado com sucesso!");
                setTimeout(() => navigate('/login'), 1200);
            }
        }, 800);
    };

    return (
        <>
            <Box component={Paper} elevation={3} sx={{ maxWidth: 360, mx: "auto", mt: 8, p: 4, display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" align="center" gutterBottom>Cadastro</Typography>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <TextField
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        fullWidth
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={loading} fullWidth sx={{ mt: 1 }}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Registrar"}
                    </Button>
                    <Link component={RouterLink} to="/login" underline="hover" sx={{ mt: 2, textAlign: "center" }}>
                        Já tem uma conta? Faça o Login
                    </Link>
                </form>
            </Box>
            <ToastContainer position="top-center" autoClose={2500} />
        </>
    );
}