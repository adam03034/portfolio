// src/data/projects.js
export const projects = [
    {
      id: 1,
      title: "Todo List Application",
      description: "Moderná Todo aplikácia vytvorená pomocou React a Vite s pokročilými funkciami pre efektívnu správu úloh.",
      image: "images/projects/todo-list-icon.svg",
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
      image: "images/projects/database-icon.svg",
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
    {
      id: 3,
      title: "COMING SOON",
      description: "Vzrušujúci nový projekt je momentálne vo vývoji. Sledujte tento priestor pre budúce aktualizácie!",
      image: "images/projects/coming-soon-icon.svg",
      githubUrl: "#",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "?..."
      ]
    },
    {
      id: 4,
      title: "COMING SOON",
      description: "Niečo veľké sa pripravuje... Všetky detaily budú čoskoro odhalené.",
      image: "images/projects/coming-soon-icon.svg",
      githubUrl: "#",
      technologies: [
        "???",
        "Coming Soon"
      ]
    }
  ];
  
  export default projects;