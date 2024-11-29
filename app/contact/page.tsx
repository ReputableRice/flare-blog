'use client';
import React, { useState } from 'react';

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <main className="mx-auto mt-16 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0">
      <section className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white text-center">
          Get in Touch
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl text-center">
          Have questions about Flare? We're here to help. Send us a message and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mb-32 mx-auto w-full max-w-2xl">
        <div className="flex flex-col space-y-6 w-full">
          <h2 className="text-3xl font-semibold">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-md border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-md border border-gray-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-md border border-gray-300"
              rows={6}
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {formStatus && <p className="text-green-600 mt-4">{formStatus}</p>}
        </div>
      </section>

      <footer className="mt-32 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Flare. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
