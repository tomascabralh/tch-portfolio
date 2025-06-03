import content from '../data/content.json';

export default function Skills() {
    return (
        <section className="text-center sm:text-left mx-[14px] px-4 py-16 lg:px-0 lg:mx-[160px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-b border-gray-700">
            {content.skills.map((skill) => (
                <div className="text-[#D9D9D9]" key={skill.name}>
                    <h3 className="text-[24px] md:text-[42px] font-bold">{skill.name}</h3>
                    <p className="text-base md:text-[18px] text-gray-400">{skill.years} Years Experience</p>
                </div>
            ))}
        </section>
    );
}
