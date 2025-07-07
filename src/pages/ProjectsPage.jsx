import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectsPage() {
    const { projects, createProject } = useProjects();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("O nome do projeto é obrigatório.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            createProject({ name: name.trim(), description: description.trim() });
            setLoading(false);
            setName("");
            setDescription("");
            setShowForm(false);
            toast.success("Projeto criado com sucesso!");
        }, 800);
    };

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto" }}>
            <h1>Projetos</h1>
            <button style={{ marginBottom: 16 }} onClick={() => setShowForm((v) => !v)}>
                {showForm ? "Cancelar" : "+ Novo Projeto"}
            </button>
            {showForm && (
                <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, border: "1px solid #eee", borderRadius: 6, padding: 16 }}>
                    <input
                        type="text"
                        placeholder="Nome do projeto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        required
                    />
                    <textarea
                        placeholder="Descrição (opcional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={loading}
                        rows={3}
                    />
                    <button type="submit" disabled={loading}>{loading ? "Criando..." : "Criar Projeto"}</button>
                </form>
            )}
            {projects.length === 0 ? (
                <p>Nenhum projeto cadastrado.</p>
            ) : (
                <ul style={{ padding: 0, listStyle: "none" }}>
                    {projects.map((project) => (
                        <li key={project.id} style={{ border: "1px solid #ccc", borderRadius: 6, padding: 12, marginBottom: 10 }}>
                            <strong>{project.name}</strong>
                            <div style={{ fontSize: 14, color: "#555" }}>{project.description}</div>
                        </li>
                    ))}
                </ul>
            )}
            <ToastContainer position="top-center" autoClose={2500} />
        </div>
    );
}