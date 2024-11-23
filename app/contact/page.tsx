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
    <main className="mx-auto mt-16 w-full max-w-6xl px-4 lg:px-0">
      <section className="text-center space-y-8 mb-32">
        <h1 className="text-4xl font-extrabold">Get in Touch with Us</h1>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          Have a question or need assistance? We'd love to hear from you.
        </p>
      </section>

      <section className="mb-32">
        <div className="flex flex-col space-y-6">
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
