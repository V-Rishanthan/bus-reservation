import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-sm bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto"
      >
        <p className="text-lg text-[#9d4edd] font-medium pb-2">
          Customer Support
        </p>
        <h1 className="text-4xl font-semibold text-slate-800 pb-4">
          Need help with your booking?
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Our team is available 24/7 to assist you with any questions about your
          bus tickets,
          <br />
          schedule changes, or travel inquiries. We're here to help!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-[700px]">
          <div className="w-full">
            <label className="text-gray-700 font-medium" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded-lg outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd]"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-gray-300 rounded-lg outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd]"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="mt-6 w-full md:w-[700px]">
          <label className="text-gray-700 font-medium" htmlFor="message">
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-4 h-40 border border-gray-300 rounded-lg resize-none outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd]"
            placeholder="Please describe your booking issue or inquiry..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-8 bg-[#9d4edd] hover:bg-[#7b2cbf] text-white h-14 w-64 px-6 rounded-lg font-medium text-lg transition-colors duration-300"
        >
          Submit Inquiry
        </button>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>For immediate assistance, please call our support line:</p>
          <p className="font-semibold text-[#9d4edd] mt-1">+1 (800) 555-1234</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
