const skills = [
    { name: "HTML-CSS", years: "4" },
    { name: "Javascript-Typescript", years: "4" },
    { name: "React", years: "4" },
    { name: "Next", years: "2" },
    { name: "Redux", years: "3" },
    { name: "Testing", years: "4" },
    { name: "Git/Github", years: "4" },
];

export default function Skills() {
    return (
        <section className="text-center sm:text-left mx-[14px] px-4 py-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 border-t border-b border-gray-700">
            {skills.map((skill) => (
                <div key={skill.name}>
                    <h3 className="text-[32px] font-semibold">{skill.name}</h3>
                    <p className="text-base text-gray-400">{skill.years} Years Experience</p>
                </div>
            ))}
        </section>
    );
}
