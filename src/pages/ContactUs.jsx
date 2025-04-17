import React from "react";
import Footer from "../layout/Footer";

const ContactUs = () => {
  return (
    <div className="text-white bg-[#191919] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[url('/path-to-your-hero-image.jpg')] bg-cover bg-center py-40 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-400">Home / Contact</p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-10 bg-[#1c1c1c]">
        <div className="bg-gray-900 p-6 rounded-lg text-center shadow-md">
          <div className="text-yellow-400 text-3xl mb-2">📍</div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p>7 Green Lake Street<br />Crawfordsville, IN 47933</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center shadow-md">
          <div className="text-yellow-400 text-3xl mb-2">✉️</div>
          <h2 className="text-xl font-semibold">Email Us</h2>
          <p>Elito@gmail.com<br />helloyou@gmail.com</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center shadow-md">
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
        <form className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name*" className="p-3 bg-gray-800 rounded text-white w-full" />
          <input type="email" placeholder="Your Email*" className="p-3 bg-gray-800 rounded text-white w-full" />
          <input type="text" placeholder="Address" className="p-3 bg-gray-800 rounded text-white w-full" />
          <input type="text" placeholder="Services" className="p-3 bg-gray-800 rounded text-white w-full" />
          <textarea placeholder="Message.." rows="5" className="p-3 bg-gray-800 rounded text-white w-full md:col-span-2"></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-full px-6 py-2 text-white w-max mx-auto">
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

     <Footer/>
    </div>
  );
};

export default ContactUs;
