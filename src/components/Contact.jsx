"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center px-6  bg-white text-zinc-900 gap-12"
    >
      {/* Vertical Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold tracking-wider text-zinc-900"
      >
        {/* Horizontal (mobile) */}
        <span className="block md:hidden bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent">
          Get in Touch
        </span>

        {/* Vertical (md and above) */}
        <span
          className="hidden md:block bg-gradient-to-b from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Get in Touch
        </span>
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-lg bg-white backdrop-blur-lg border border-zinc-200 shadow-md rounded-2xl p-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-700">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message..."
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-sm text-zinc-700 mt-4">{status}</p>
        )}
      </motion.form>
    </section>
  );
}
