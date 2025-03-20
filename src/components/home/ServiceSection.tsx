"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    title: "Custom Web Development",
    description:
      "We craft modern, high-performance websites designed for engagement, conversions, and seamless user experience. Our expertise in React, Next.js, and cutting-edge web technologies ensures your brand stands out.",
    icon: "🚀",
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
  },
  {
    title: "SEO & Lightning-Fast Performance",
    description:
      "Dominate search rankings and deliver an ultra-fast browsing experience. Our SEO-optimized, mobile-friendly websites ensure higher visibility, lower bounce rates, and increased traffic.",
    icon: "📈",
    color: "bg-gradient-to-br from-purple-600 to-fuchsia-500",
  },
  {
    title: "Mobile-First, User-Friendly Design",
    description:
      "We create stunning, responsive websites that adapt perfectly to all devices. With smooth navigation, intuitive interfaces, and flawless performance, your users will enjoy a seamless experience.",
    icon: "📲",
    color: "bg-gradient-to-br from-pink-600 to-rose-500",
  },
  {
    title: "Enterprise-Grade Security & Compliance",
    description:
      "Protect your website and customer data with industry-leading security. From GDPR compliance to real-time monitoring and encrypted architecture, we keep your platform safe and secure.",
    icon: "🛡️",
    color: "bg-gradient-to-br from-teal-600 to-emerald-500",
  },
];


const ServiceSection = () => {
  return (
    <section className="md:mt-16 mt-9 relative overflow-hidden">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl p-2 md:text-4xl lg:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Elevate Your Digital Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Transform your online experience with cutting-edge technology, performance-driven designs, and seamless user interactions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-8 rounded-2xl overflow-hidden">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:shadow-xl transition-all`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="lg:text-2xl text-base font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r from-purple-600 to-blue-500 group-hover:text-transparent bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center md:mt-10 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
        <Link href="#OurTeam">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-12 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow hover:scale-[1.02] transform duration-300">
            Start Your Project Now
            <ArrowRightIcon className="w-5 h-5 inline-block ml-3 -mt-1" />
          </button>
        </Link>
        </motion.div>
      
    </section>
  );
};
export default ServiceSection;