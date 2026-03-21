import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, access_key: "00929bf3-9d5a-4d31-aeeb-cf7d5c706b7f" }),
    });
    setLoading(false);
    if (response.ok) {
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setErrorMessage("Oops! Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-dark-card text-dark-heading dark:text-light-heading placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors text-sm";

  const labelClass = "block text-sm font-medium text-dark-heading dark:text-light-heading mb-1.5";

  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col md:items-center md:justify-center px-5 pt-6 pb-24 md:pb-10">
      <div className="w-full max-w-lg">
        <section className="mb-8">
          <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">Get in touch</span>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2">
            Contact Me
          </h1>
        </section>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
          </div>
          <div>
            <label className={labelClass}>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Subject" />
          </div>
          <div>
            <label className={labelClass}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className={inputClass} placeholder="Your message..." />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {successMessage && <p className="text-center text-green-500 text-sm">{successMessage}</p>}
          {errorMessage && <p className="text-center text-red-500 text-sm">{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
}

export default Contact;
