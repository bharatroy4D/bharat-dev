import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Copy, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const copyEmail = () => {
    console.log('Email copied');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white my-10 rounded-2xl border border-orange-500 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            <span className="text-lime-400 text-lg font-mono">Get in Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Let's create </span>
            <span className="text-gray-400">together!</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div>
            <div className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-teal-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-teal-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-teal-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-teal-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 bg-transparent border border-teal-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-3 bg-transparent text-lime-400 hover:text-lime-300 font-medium transition-colors group"
                >
                  <span className="text-lg">Send Message</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {/* Phone Number */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-lime-400 rounded-full"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-transparent border-2 border-lime-400 rounded-lg">
                  <Phone className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Phone Number</h3>
                  <p className="text-white text-lg font-medium">+8801747874773</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-lime-400 rounded-full"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-transparent border-2 border-lime-400 rounded-lg">
                  <Mail className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lime-400 text-lg font-medium">mehedi.hasan11023@gmail.com</p>
                    <button
                      onClick={copyEmail}
                      className="p-1 hover:bg-slate-700 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-lime-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-lime-400 rounded-full"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-transparent border-2 border-lime-400 rounded-lg">
                  <MapPin className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Address</h3>
                  <p className="text-white text-lg font-medium">Mymensingh, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Instant Chat */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-lime-400 rounded-full"></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-transparent border-2 border-lime-400 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Instant Chat</h3>
                  <a href="#" className="text-lime-400 text-lg font-medium hover:text-lime-300 transition-colors flex items-center gap-2">
                    WhatsApp
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;