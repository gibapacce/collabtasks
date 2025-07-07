import React, { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto
const AuthContext = createContext();

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Provider do contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Tenta recuperar usuário do localStorage ao iniciar
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Salva usuário no localStorage sempre que mudar
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // Função mock de login
    const login = (email, password) => {
        // Aqui você pode adicionar validação mock
        if (email && password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    // Função mock de registro
    const register = (email, password) => {
        // Aqui você pode adicionar lógica mock de registro
        if (email && password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    // Função de logout
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 