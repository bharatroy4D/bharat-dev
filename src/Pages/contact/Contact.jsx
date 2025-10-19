import { Phone, Mail, MapPin, MessageSquare, Copy, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/themeContext'; // 🌙 Theme context import

const Contact = () => {
  const { theme } = useTheme();

  const bgClass = theme === "dark" ? "bg-gray-800/80 text-white border border-orange-500" : "bg-gray-100/70 text-gray-900 border border-blue-400";
  const borderClass = theme === "dark" ? "border-lime-400" : "border-teal-600";
  const inputBgClass = theme === "dark" ? "bg-slate-800 text-gray-300 placeholder-gray-500" : "bg-white text-gray-900 placeholder-gray-500";
  const inputBorderClass = theme === "dark" ? "border-teal-700 focus:border-teal-500" : "border-teal-400 focus:border-teal-600";
  const btnTextClass = theme === "dark" ? "text-lime-400 hover:text-lime-300" : "text-teal-600 hover:text-teal-500";

  return (
    <div
      id='contact'
      className={`bg-gradient-to-br ${bgClass} shadow-lg hover:shadow-orange-400/30 mt-6 rounded-2xl py-10 px-8 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 ${theme === "dark" ? "bg-lime-400" : "bg-teal-600"} rounded-full`}></div>
            <span className={`${theme === "dark" ? "text-lime-400" : "text-teal-600"} text-lg font-mono`}>Get in Touch</span>
          </div>
          <h1 className={`text-xl md:text-2xl transition-colors duration-300`}>
            <span className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}>Let's create </span>
            <span className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>together!</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                    className={`w-full px-5 py-2 border rounded focus:outline-none transition-colors ${inputBgClass} ${inputBorderClass}`}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className={`w-full px-5 py-2 border rounded focus:outline-none transition-colors ${inputBgClass} ${inputBorderClass}`}
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
                    className={`w-full px-5 py-2 border rounded focus:outline-none transition-colors ${inputBgClass} ${inputBorderClass}`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`w-full px-5 py-2 border rounded focus:outline-none transition-colors ${inputBgClass} ${inputBorderClass}`}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className={`w-full px-5 py-2 border rounded focus:outline-none transition-colors resize-none ${inputBgClass} ${inputBorderClass}`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button className={`flex items-center gap-2 px-6 py-3 bg-transparent font-medium transition-colors group ${btnTextClass}`}>
                  <span className="text-sm">Send Message</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: <Phone className={`w-6 h-6 ${theme === "dark" ? "text-lime-400" : "text-teal-600"}`} />,
                title: "Phone Number",
                value: "+8801714414775",
              },
              {
                icon: <Mail className={`w-6 h-6 ${theme === "dark" ? "text-lime-400" : "text-teal-600"}`} />,
                title: "Email",
                value: `bharatroy1005@gmail.com`,
                copy: true,
              },
              {
                icon: <MapPin className={`w-6 h-6 ${theme === "dark" ? "text-lime-400" : "text-teal-600"}`} />,
                title: "Address",
                value: "Rangpur, Bangladesh",
              },
              {
                icon: <MessageSquare className={`w-6 h-6 ${theme === "dark" ? "text-lime-400" : "text-teal-600"}`} />,
                title: "Instant Chat",
                value: "WhatsApp",
                link: "#",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-0.5 h-full rounded-full ${theme === "dark" ? "bg-lime-400" : "bg-teal-600"}`}></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-transparent border rounded-lg ${borderClass}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className={`${theme === "dark" ? "text-lime-400 hover:text-lime-300" : "text-teal-600 hover:text-teal-500"} flex items-center gap-2 transition-colors`}>
                        {item.value} <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : item.copy ? (
                      <div className="flex items-center gap-2">
                        <p className={`${theme === "dark" ? "text-lime-400" : "text-teal-600"}`}>{item.value}</p>
                        <button className="p-1 hover:bg-slate-700 rounded transition-colors">
                          <Copy className={`w-4 h-4 ${theme === "dark" ? "text-lime-400" : "text-teal-600"}`} />
                        </button>
                      </div>
                    ) : (
                      <p className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
