import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        
        <p className="mb-4">
          We would love to hear from you! Please fill out the form below or reach us at the contact information provided.
        </p>

        <form className="w-full max-w-md bg-gray-800 p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-1 border rounded-md outline-none bg-gray-800 text-white border-gray-300 focus:border-pink-500"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-1 border rounded-md outline-none bg-gray-800 text-white border-gray-300 focus:border-pink-500"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-1 border rounded-md outline-none bg-gray-800 text-white border-gray-300 focus:border-pink-500"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-700 duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold">Alternatively, you can reach us at:</h3>
          <p>Email: ebooksust@gmail.com</p>
          <p>Phone: +8801622489150</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
