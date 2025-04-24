import Form from "../components/Form";

export default function Contact() {
    return (
        <section id='contact' className="px-4 py-20 border-t border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="mb-10 text-gray-400 max-w-xl">
                I would love to hear about your project and how I could help. Please fill in the form and I’ll get back to you.
            </p>
            <Form />
        </section>
    );
}
