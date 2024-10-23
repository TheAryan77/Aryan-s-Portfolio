import React, { useState } from 'react';
import { database, ref, push } from './firebase';
const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Save form data to Firebase
            await push(ref(database, 'contacts'), form);
            alert(`Thanks ${form.name} for your message!Aryan loved it,and will reply soon at your mail!`);
            setForm({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send the message.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className='c-space my-20'>
            <div className='relative min-h-screen mt-5 flex items-center justify-center flex-col'>
                <img className='absolute inset-0 min-h-screen' src="/assets/terminal.png" alt="" />
                <div className='contact-container'>

                    <h3 className='head-text mt-5' >Hey, say something! ✨ </h3>
                    <p className='text-lg text-white-600'>Thank you for exploring my universe! 🌌 I’d love to hear your thoughts—how did you like it? If you'd like to collaborate, build something together, create a portfolio like this, or join a community, let's connect and make it happen! 🌠 The cosmos is vast, and there’s always room for new explorers. 🚀

                        Let me know if this works or needs any adjustments! 😊</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-5 flex relative flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="Aryan Mahendru"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="field-input"
                            placeholder="aryanmahendru7@gmail.com"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">Message for Aryan!</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi Aryan, What's up? You're amazing.."
                        />
                    </label>

                    <button
                        className="field-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Launching...' : 'Launch 🚀'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
