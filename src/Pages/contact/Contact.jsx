import { Phone, Mail, MapPin, MessageSquare, Copy, ExternalLink } from 'lucide-react';

const Contact = () => {


    return (
        <div id='contact' className=" bg-gradient-to-br from-slate-800/70 via-slate-700 to-teal-900 shadow-lg hover:shadow-orange-400/30 text-white mt-6 rounded-2xl  py-10 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-lime-400 text-lg font-mono">Get in Touch</span>
                    </div>
                    <h1 className="text-xl md:text-2xl ">
                        <span className="text-white">Let's create </span>
                        <span className="text-gray-400">together!</span>
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
                                        className="w-full px-5 py-2 border bg-slate-800 border-teal-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        className="w-full px-5 py-2 bg-slate-800 border border-teal-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
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
                                        className="w-full px-5 py-2  bg-slate-800 border border-teal-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full px-5 py-2  bg-slate-800 border border-teal-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full px-5 py-2  bg-slate-800 border border-teal-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    className="flex items-center gap-2 px-6 py-3 bg-transparent text-lime-400 hover:text-lime-300 font-medium transition-colors group"
                                >
                                    <span className="text-sm">Send Message</span>
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
                                <div className="w-0.5 h-full bg-lime-400 rounded-full"></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-transparent border border-lime-400 rounded-lg">
                                    <Phone className="w-6 h-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Phone Number</h3>
                                    <p className="text-white">+8801714414775</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-0.5 h-full bg-lime-400 rounded-full"></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-transparent border border-lime-400 rounded-lg">
                                    <Mail className="w-6 h-6 text-lime-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                                    <div className="flex items-center gap-2">
                                        <p className="text-lime-400 flex items-center ">bharatroy1005@<span className='hidden md:block'>gmail.com</span></p>
                                        <button
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
                                <div className="w-0.5 h-full bg-lime-400 rounded-full"></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-transparent border border-lime-400 rounded-lg">
                                    <MapPin className="w-6 h-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Address</h3>
                                    <p className="text-white">Rangpur, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Instant Chat */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-0.5 h-full bg-lime-400 rounded-full"></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-transparent border border-lime-400 rounded-lg">
                                    <MessageSquare className="w-6 h-6 text-lime-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Instant Chat</h3>
                                    <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors flex items-center gap-2">
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