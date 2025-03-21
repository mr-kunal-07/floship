import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        // Form Validation
        if (!name || !email || !subject || !message) {
            setError("All fields are required.");
            return;
        }

        // Email Validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError(""); // Clear previous errors

        // Send email using EmailJS
        emailjs.send("service_joj056o", "template_vaiivrl", formData, "CIAJEr84e1aYEdQ3o")
            .then((response) => {
                console.log("Email Sent Successfully!", response);
                setSuccess("Your message has been sent successfully! 🚀");
                setFormData({ name: "", email: "", subject: "", message: "" });

                // Hide success message after 3 seconds
                setTimeout(() => setSuccess(""), 3000);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setError("Failed to send message. Please check your configuration.");
            });
    };

    return (
        <motion.section className="bg-white py-12 px-4 md:px-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Google Maps Section */}
            <div className="w-full mb-8">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3768.147452673009!2d72.833733!3d19.188761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6eefb76fa01%3A0x9c4c6bc85e0a9609!2sOld%20Sonal%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1742236691391!5m2!1sen!2sin"
                    className="w-full h-80 rounded-md shadow-md"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <ContactCard icon="📍" title="Location" text="Mumbai, India" />
                <ContactCard icon="✉️" title="Email" text="info@floshipservices.com" link="mailto:info@floshipservices.com" />
                <ContactCard icon="📞" title="Call" text="+91 93721 76665" link="tel:+919372176665" />
            </div>

            {/* Contact Form */}
            <motion.div className="bg-orange-50 p-8 rounded-md shadow-md" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">Feel Free to Write Us</h2>

                {/* Error Message */}
                {error && <p className="text-red-600 text-center mb-4">❌ {error}</p>}
                {/* Success Message */}
                {success && <p className="text-green-600 text-center mb-4">✅ {success}</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InputField type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                        <InputField type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <InputField type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                    <motion.button className="bg-orange-600 text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-orange-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</motion.button>
                </form>
            </motion.div>
        </motion.section>
    );
};

// 🔹 Reusable Contact Card Component
const ContactCard = ({ icon, title, text, link }) => (
    <div className="flex items-center space-x-4 bg-orange-100 p-6 rounded-md shadow-md">
        <div className="text-orange-600 text-3xl">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-orange-700">{title}:</h3>
            {link ? <a href={link} className="text-gray-700 hover:text-orange-600 transition">{text}</a> : <p className="text-gray-700">{text}</p>}
        </div>
    </div>
);

// 🔹 Reusable Input Field Component
const InputField = ({ type, name, placeholder, value, onChange }) => (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className="p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
);

export default Contact;
