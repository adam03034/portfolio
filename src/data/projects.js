// src/data/projects.js

export const projects = [
    {
        id: 1,
        title: "Todo List Application",
        description: "Moderná Todo aplikácia vytvorená pomocou React a Vite s pokročilými funkciami pre efektívnu správu úloh.",
        image: "images/projects/todo-list-icon.svg", // Tu budete potrebovať screenshot projektu
        githubUrl: "https://github.com/adam03034/TO-DO-LIST",
        technologies: [
            "React 18",
            "Vite",
            "Tailwind CSS",
            "Recharts",
            "Lucide React",
            "Shadcn/ui"
        ],
        features: [
            "Pridávanie, editovanie a mazanie úloh",
            "Kategorizácia úloh s farebnými štítkami",
            "Deadline pre úlohy",
            "Vyhľadávanie a filtrovanie",
            "Štatistiky a vizualizácie",
            "Automatické ukladanie do localStorage",
            "Responzívny dizajn"
        ]
    },
    {
        id: 2,
        title: "Prezentácia DB",
        description: "Projekt vytvorený ako záverečná práca pre predmet Databázové systémy. Implementuje interaktívnu prezentáciu pomocou React a moderných webových technológií.",
        image: "images/projects/database-icon.svg", // Tu budete potrebovať screenshot projektu
        githubUrl: "https://github.com/adam03034/bakery",
        technologies: [
            "React",
            "Tailwind CSS",
            "Vite",
            "Node.js",
            "ESLint",
            "Lucide React"
        ]
    },
    // Môžete pridať ďalšie projekty podľa potreby
];

export default projects;