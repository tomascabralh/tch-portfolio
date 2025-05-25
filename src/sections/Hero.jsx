import Button from "../components/Button";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start px-4 lg:px-0 md:px-6 lg:mx-[160px] pb-12 lg:pb-76 gap-8">
            <div className="z-10 text-center md:text-left md:mt-[52px] md:leading-[1.1]">
                <p className="text-center text-[40px] md:text-[60px] md:text-left text-[#FFFFFF] font-semibold">
                    Nice to{' '}
                    <span className="inline md:hidden">meet you!</span>
                    <span className="hidden md:inline">
                        <br className="md:inline lg:hidden" /> meet you!
                    </span>
                </p>
                <p className="text-[40px] md:text-[60px] font-semibold">
                    <span className="underline underline-offset-4 decoration-[#4EE1A0]">I'm Tomas Cabral.</span>
                </p>
                <p className='text-center md:text-[18px] md:text-left md:max-w-[400px] font-light text-[#D9D9D9] pt-[24px]'>
                    Based in Argentina, I'm a front-end developer, focused on building solid web apps and always exploring new techs.
                </p>
                <a href="#contact">
                    <Button>CONTACT ME</Button>
                </a>
            </div>
            <div className="relative flex justify-center md:absolute md:top-0 md:right-0 lg:pr-58">
                <img src="/images/tch-pic.png" alt="Tomas Cabral" className="max-w-[280px] md:max-w-[322px] lg:max-w-[445px] grayscale contrast-105 brightness-105 transition duration-500 rounded"
                />
            </div>
        </section>
    );
}
