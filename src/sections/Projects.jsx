import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import Title from "../components/Title";
import content from '../data/content.json';

export default function Projects() {
    return (
        <section className="px-4 py-20 lg:px-0 lg:mx-[160px]">
            <div className="flex justify-between items-center mb-10">
                <Title>Projects</Title>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                {content.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
