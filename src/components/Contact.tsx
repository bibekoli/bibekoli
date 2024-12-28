import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialMedia = [
    {
      name: "Facebook",
      icon: "akar-icons:facebook-fill",
      link: "https://www.facebook.com/bibekoli28",
    },
    {
      name: "LinkedIn",
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/bibekoli",
    },
    {
      name: "GitHub",
      icon: "akar-icons:github-fill",
      link: "https://github.com/bibekoli",
    },
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailUrl = `mailto:hello@bibekoli.com?subject=New Message from ${formData.name} (${formData.email})&body=${formData.message}`;
    window.open(mailUrl);
  };

  return (
    <div className="m-4 p-4 bg-white rounded-2xl" id="contact-section">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0">
        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Icon
                icon="akar-icons:email-fill"
                className="text-2xl text-blue-500 mr-4"
              />
              <span className="text-gray-700">hello@bibekoli.com</span>
            </li>
            <li className="flex items-center">
              <Icon
                icon="ic:round-location-on"
                className="text-2xl text-blue-500 mr-4"
              />
              <span className="text-gray-700">Budhabare, Jhapa, Nepal</span>
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="text-xl font-medium mb-4 text-gray-800">
              Connect with Me
            </h4>
            <div className="flex space-x-4">
              {
                socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500 transition-colors">
                    <Icon icon={social.icon} className="text-3xl" />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full md:w-1/2"
          method="POST"
          name="contact"
          onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quaternary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quaternary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quaternary"
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-quaternary text-white py-3 px-6 rounded-md transition-colors hover:bg-opacity-70`}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
