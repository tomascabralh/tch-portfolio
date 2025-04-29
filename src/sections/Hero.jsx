import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import Shapes from "../components/Shapes";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start px-4 md:px-6 pb-12 gap-8">
            <div className="z-10 text-center md:max-w-[500px] md:text-left md:mt-[52px] md:leading-[1.1]">
                <Title>
                    Nice to<span className="md:hidden"> </span><span className="hidden md:inline"><br /></span>meet you! I’m <span className="underline underline-offset-4 decoration-[#4EE1A0]">Tomas Cabral.</span>
                </Title>
                <Subtitle>
                    Based in Argentina, I’m a front-end developer, focused on building solid web apps and always exploring new techs.
                </Subtitle>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="relative flex justify-center md:absolute md:top-0 md:right-0 ">
                <img src="/images/tch.jpeg" alt="Tomas Cabral" className="w-2/3 md:max-w-[411px] filter grayscale hover:grayscale-0 transition duration-300 rounded"
                />
                <Shapes />
            </div>
        </section>
    );
}
