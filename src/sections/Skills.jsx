const skills = [
    { name: "HTML", years: "4" },
    { name: "CSS", years: "4" },
    { name: "Javascript", years: "4" },
    { name: "Accessibility", years: "4" },
    { name: "React", years: "3" },
    { name: "Sass", years: "3" },
];

export default function Skills() {
    return (
        <section className="px-4 py-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 border-t border-gray-700">
            {skills.map((skill) => (
                <div key={skill.name}>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.years} Years Experience</p>
                </div>
            ))}
        </section>
    );
}
