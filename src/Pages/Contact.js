// import React from "react";
// import { contactDetails } from "../Details";

// function Contact() {
//   const { email, phone } = contactDetails;
//   return (
//     <main className="container mx-auto max-width section">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
//         Contact me
//       </h1>
//       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
//         <a href={`mailto:${email}`}>{email}</a>
//       </h3>
//       <span className="text-center text-content text-xl font-light block">or</span>
//       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
//         <a href={`tel:${phone}`}>{phone}</a>
//       </h3>
//     </main>
//   );
// }

// export default Contact;


import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "00929bf3-9d5a-4d31-aeeb-cf7d5c706b7f", // Web3Forms API key
      }),
    });

    if (response.ok) {
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setErrorMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[80vh] md:min-h-screen p-4 md:pt-0">
      <div className="w-full max-w-md">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-gray-900 dark:text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-gray-900 dark:text-gray-100"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-gray-900 dark:text-gray-100"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-gray-900 dark:text-gray-100"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
          {successMessage && (
            <p className="text-center text-green-500 mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-center text-red-500 mt-4">{errorMessage}</p>
          )}
        </form>
      </div>
    </main>
  );
}

export default Contact;
