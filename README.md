# CollabTasks

Sistema de Gerenciamento de Tarefas Colaborativo

Este projeto é um sistema web para gerenciamento de tarefas e projetos colaborativos, permitindo múltiplos usuários, projetos, notificações e métricas.

## Tecnologias Utilizadas
- React
- Vite
- JavaScript
- ESLint
- React Router DOM

## Como rodar o projeto
```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

Acesse: http://localhost:5173

## Estrutura de Pastas
```
src/
  components/
  pages/
  context/
  hooks/
  services/
  utils/
  styles/
```

## Rotas já implementadas
- `/login` — Página de login
- `/register` — Página de registro
- `/dashboard` — Dashboard principal
- `/projects` — Lista de projetos
- `/projects/:projectId` — Detalhes de um projeto
- `/projects/:projectId/edit` — Editar projeto
- `/projects/:projectId/tasks/:taskId` — Detalhes de uma tarefa
- `/projects/:projectId/tasks/:taskId/edit` — Editar tarefa
- `/notifications` — Notificações
- `/profile` — Perfil do usuário
- `/settings` — Configurações
- `*` — Página não encontrada

## Progresso
- [x] Setup inicial com Vite + React
- [x] Estrutura de pastas criada
- [x] Rotas e páginas base implementadas
- [ ] Autenticação (login/registro)
- [ ] CRUD de tarefas e projetos
- [ ] Colaboração entre usuários
- [ ] Dashboard e notificações
- [ ] Otimizações e testes

## Próximos Passos
- Implementar autenticação de usuário
- Criar formulários de login e registro
- Iniciar lógica de CRUD de projetos/tarefas
- Adicionar contexto global para autenticação e tarefas

---

Projeto em desenvolvimento 🚀
