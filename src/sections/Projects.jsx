import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Design Portfolio",
        tech: ["HTML", "CSS"],
        image: "/project1.png",
        code: "#",
        live: "#",
    },
    // add more...
];

export default function Projects() {
    return (
        <section className="px-4 py-20">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold">Projects</h2>
                <a href="#contact" className="text-base border-b border-green-400">CONTACT ME</a>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
