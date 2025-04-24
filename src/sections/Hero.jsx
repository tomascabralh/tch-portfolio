import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import Shapes from "../components/Shapes";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center px-4 pb-12 gap-8">
            <div className="md:w-1/2 text-center md:text-left">
                <Title>Nice to meet you!</Title>
                <Title>I’m <span className="underline decoration-green-400">Tomas Cabral</span>.</Title>
                <Subtitle>
                    Based in Argentina, I’m a front-end developer from Argentina, focused on building solid web apps and always exploring new techs.
                </Subtitle>
                <a href="#contact">
                    <Button>Contact Me</Button>
                </a>
            </div>
            <div className="md:w-1/2">
                <img src="/images/tch.jpeg" alt="Tomas Cabral" className="mx-auto rounded w-2/3 filter grayscale hover:grayscale-0 transition duration-300"
                />
                <Shapes />
            </div>
        </section>
    );
}
