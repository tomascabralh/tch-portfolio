import Form from "../components/Form";
import Title from "../components/Title";

export default function Contact() {
    return (
        <section id='contact' className="lg:max-w-[1440px] lg:mx-auto text-white">
            <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 md:px-[160px] pt-[60px] text-center lg:text-left pb-[90px]">
                <div className="flex-1 lg:pr-[220px]">
                    <Title>Contact</Title>
                    <p className="mb-10 text-gray-400 max-w-xl">
                        I would love to hear about your project and how I could help. Please fill in the form and I'll get back to you.
                    </p>
                </div>
                <div className="flex-1 w-full">
                    <Form />
                </div>
            </div>
            <div className="px-4 md:px-[160px]">
                <div className="border-b border-gray-700 w-full"></div>
            </div>
        </section>
    );
}
