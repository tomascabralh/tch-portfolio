import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [touched, setTouched] = useState({ name: false, email: false, message: false });

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const errors = {
        name: touched.name && !form.name.trim(),
        email: touched.email && !validateEmail(form.email),
        message: touched.message && !form.message.trim(),
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });

        if (!errors.name && !errors.email && !errors.message) {
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
                .then(() => {
                    alert('Message sent!');
                    setForm({ name: '', email: '', message: '' });
                    setTouched({ name: false, email: false, message: false });
                })
                .catch(() => {
                    alert('Failed to send message.');
                });
        }
    };

    const getInputClasses = (field) => {
        const base = 'bg-transparent border-b py-2 outline-none transition-colors w-full autofill:shadow-[inset_0_0_0_1000px_#242424] autofill:text-white';
        const focus = 'focus:border-green-400';
        if (errors[field]) return `${base} border-red-500 ${focus}`;
        if (touched[field]) return `${base} border-green-400 ${focus}`;
        return `${base} border-gray-600 ${focus}`;
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-white">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={getInputClasses('name')}
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={getInputClasses('email')}
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
            </div>

            <div>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className={getInputClasses('message')}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
            </div>

            <div className="flex flex-col items-center self-end mt-4 text-sm uppercase tracking-wide">
                <button type="submit" className="text-green-400 hover:text-green-500">
                    SEND MESSAGE
                </button>
                <div className="h-[1px] bg-green-400 w-full mt-2"></div>
            </div>
        </form>
    );
}
