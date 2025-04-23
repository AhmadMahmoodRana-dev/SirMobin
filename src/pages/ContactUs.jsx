import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../layout/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cswm5n7",    // Replace with your actual EmailJS service ID
        "template_4fam56m",   // Replace with your actual template ID
        form.current,
        "s7t8Y0agw_TBhmAfd"     // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully !");  // Error toast
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, try again."); 
        }
      );
  };

  return (
    <div className="text-white bg-[#191919] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[url('/path-to-your-hero-image.jpg')] bg-cover bg-center py-40 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-400">Home / Contact</p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-10 bg-[#1c1c1c]">
        {/* Address */}
        <div className="bg-[#191919] p-7 rounded-lg text-center shadow-md">
          <div className="text-yellow-400 text-3xl mb-2">📍</div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p>7 Green Lake Street<br />Crawfordsville, IN 47933</p>
        </div>
        {/* Email */}
        <div className="bg-[#191919] p-7 rounded-lg text-center shadow-md">
          <div className="text-yellow-400 text-3xl mb-2">✉️</div>
          <h2 className="text-xl font-semibold">Email Us</h2>
          <p>Elito@gmail.com<br />helloyou@gmail.com</p>
        </div>
        {/* Call */}
        <div className="bg-[#191919] p-7 rounded-lg text-center shadow-md">
          <div className="text-yellow-400 text-3xl mb-2">📞</div>
          <h2 className="text-xl font-semibold">Call Now</h2>
          <p>+1 800 123 456 789<br />+1 800 123 654 987</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-10 py-16 bg-[#1c1c1c]">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Have Any Question?</h2>
          <p className="text-gray-400 text-sm">
            It is a long established fact that a reader will be distracted content of a page when looking.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <input name="user_name" type="text" placeholder="Your Name*" className="p-3 bg-[#191919] rounded text-white w-full" required />
          <input name="user_email" type="email" placeholder="Your Email*" className="p-3 bg-[#191919] rounded text-white w-full" required />
          <input name="address" type="text" placeholder="Address" className="p-3 bg-[#191919] rounded text-white w-full" />
          <input name="services" type="text" placeholder="Services" className="p-3 bg-[#191919] rounded text-white w-full" />
          <textarea name="message" placeholder="Message.." rows="5" className="p-3 bg-[#191919] rounded text-white w-full md:col-span-2" required></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-full px-6 py-2 text-white w-max">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
};

export default ContactUs;
