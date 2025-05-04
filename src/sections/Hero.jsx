import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import Shapes from "../components/Shapes";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start px-4 lg:px-0 md:px-6 lg:mx-[160px] pb-12 lg:pb-76 gap-8">
            <div className="z-10 text-center md:text-left md:mt-[52px] md:leading-[1.1]">
                <Title>
                    Nice to meet you!
                </Title>
                <Title>
                    I’m <span className="underline underline-offset-4 decoration-[#4EE1A0]">Tomas Cabral.</span>
                </Title>
                <Subtitle>
                    Based in Argentina, I’m a front-end developer, focused on building solid web apps and always exploring new techs.
                </Subtitle>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="relative flex justify-center md:absolute md:top-0 md:right-0 lg:right-70">
                <img src="/images/tch-pic.png" alt="Tomas Cabral" className="max-w-[280px] md:max-w-[322px] lg:max-w-[445px] grayscale contrast-105 brightness-105 transition duration-500 rounded"
                />
                <Shapes />
            </div>
        </section>
    );
}
