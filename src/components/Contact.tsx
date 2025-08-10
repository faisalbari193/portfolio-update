import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // ✅ Public Key Init
    emailjs.init("n4iPDJP77MgzjowIQ");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_666xmhe", // ✅ Service ID
        "template_55hwwom", // ✅ Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "n4iPDJP77MgzjowIQ" // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Thank you for your message! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
            Get In <span className="text-custom-primary">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-gray-600">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and create something amazing together!
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="mb-8 text-2xl font-semibold text-gray-800">
                Let's Connect
              </h3>
              <div className="mb-8 space-y-6">
                <div className="flex items-center p-4 rounded-lg bg-gradient-to-br from-custom-bg to-green-100">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-custom-primary">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">faisalbari193@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-gradient-to-br from-custom-bg to-green-100">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-custom-primary">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">01791694421</p>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-gradient-to-br from-custom-bg to-green-100">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-custom-primary">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div>
                <h4 className="mb-4 font-semibold text-gray-800">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/faisalbari193"
                    className="p-3 transition-all duration-300 bg-gray-100 rounded-full hover:bg-custom-primary hover:text-white group"
                  >
                    <Github
                      size={20}
                      className="text-gray-600 group-hover:text-white"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faisal-bari-1b7713350/"
                    className="p-3 transition-all duration-300 bg-gray-100 rounded-full hover:bg-custom-primary hover:text-white group"
                  >
                    <Linkedin
                      size={20}
                      className="text-gray-600 group-hover:text-white"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AiLECmBGM/?mibextid=qi2Omg"
                    className="p-3 transition-all duration-300 bg-gray-100 rounded-full hover:bg-custom-primary hover:text-white group"
                  >
                    <Facebook
                      size={20}
                      className="text-gray-600 group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="p-8 shadow-lg bg-gradient-to-br from-custom-bg to-green-100 rounded-xl"
              >
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                  Send Message
                </h3>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 transition-all duration-200 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
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
                    className="w-full px-4 py-3 transition-all duration-200 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 transition-all duration-200 bg-white border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-custom-primary focus:border-transparent"
                    placeholder="Tell me about your project or just say hi!"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full py-3 font-semibold text-white transition rounded-lg bg-custom-primary hover:bg-green-700"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
