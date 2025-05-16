import InfoCard from "../components/InfoCard";
import Button from "../components/Button";
import Title from "../components/Title";
import content from '../data/content.json';

export default function Experience() {
    return (
        <section className="px-4 py-20 lg:px-0 lg:mx-[160px]">
            <div className="flex justify-between items-center mb-10">
                <Title>Experience</Title>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="grid gap-8 md:gap-y-32 md:grid-cols-2">
                {content.experience.map((exp, index) => (
                    <InfoCard
                        key={index}
                        title={exp.title}
                        imageUrl={exp.imageUrl}
                        skills={exp.skills}
                        codeUrl={exp.codeUrl}
                        liveUrl={exp.liveUrl}
                        isExperience={true}
                        description={exp.description}
                        period={exp.period}
                    />
                ))}
            </div>
        </section>
    );
} 