import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import Shapes from "../components/Shapes";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center px-4 py-12 gap-8">
            <div className="md:w-1/2 text-center md:text-left">
                <Title>Nice to meet you! I’m <span className="underline decoration-green-400">Tomas Cabral Hunter</span>.</Title>
                <Subtitle>
                    Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
                </Subtitle>
                <Button>Contact Me</Button>
            </div>
            <div className="md:w-1/2">
                <img src="/me.png" alt="Tomas Cabral Hunter" className="w-full rounded" />
                <Shapes />
            </div>
        </section>
    );
}
