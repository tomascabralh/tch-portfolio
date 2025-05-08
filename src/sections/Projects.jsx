import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

const projectsData = [
    {
        title: "LA NACION",
        skills: ["REACT"],
        imageUrl: "/images/ln.png",
        codeUrl: null,
        liveUrl: "https://www.lanacion.com",
    },
    {
        title: "INDICIUS",
        skills: ["REACT"],
        imageUrl: "/images/indicius.png",
        codeUrl: null,
        liveUrl: "https://www.indicius.com",
    }
];

export default function Projects() {
    return (
        <section className="px-4 py-20 lg:px-0 lg:mx-[160px]">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-[40px] md:text-[72px] font-bold">Projects</h2>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
