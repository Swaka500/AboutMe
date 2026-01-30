import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setWarning("⚠️ Please fill in all fields!");
      setSuccess(false);
      return;
    }

    if (!emailPattern.test(email)) {
      setWarning("⚠️ Please enter a valid email!");
      setSuccess(false);
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_neaq1om",    // from EmailJS dashboard
        "template_81rtzsm",   // your email template
        { name, email, message },
        "RwIq7on9MpFSsYusy"     // EmailJS public key
      )
      .then(
        () => {
          setWarning("");
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");

          setTimeout(() => setSuccess(false), 3000);
        },
        (err) => {
          console.error(err);
          setWarning("⚠️ Failed to send message. Try again!");
        }
      );
  };

  return (
    <>
      {/* Top Alert */}
      {success && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-black px-6 py-3 rounded shadow-lg font-semibold animate-fade-in-out">
          Message sent successfully! 👋
        </div>
      )}

      <section id="contact" className="max-w-xl mx-auto mt-24 px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Let’s <span className="text-purple-400">Connect</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 flex flex-col gap-4"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/50 p-3 rounded outline-none focus:ring-2 ring-purple-500"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/50 p-3 rounded outline-none focus:ring-2 ring-purple-500"
            placeholder="Email"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black/50 p-3 rounded outline-none focus:ring-2 ring-purple-500"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-pink-500 py-3 rounded font-semibold shadow-lg transition"
          >
            Send Message
          </button>

          {/* Inline warning for empty/invalid fields */}
          {warning && (
            <p className="mt-2 font-semibold text-yellow-400">{warning}</p>
          )}
        </form>
      </section>
    </>
  );
}
