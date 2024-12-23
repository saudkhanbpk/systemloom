import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-700 to-purple-600 text-white">
      {/* Icon and Title Section */}
      <div className="flex flex-col items-center space-y-4">
        <FaCheckCircle className="text-6xl text-green-400 animate-bounce" />
        <h2 className="text-4xl font-extrabold tracking-wide text-center">
          Thank You!
        </h2>
        <p className="text-lg text-gray-200 text-center max-w-lg">
        Your request has been submitted successfully. We appreciate your effort 
        and will get back to you as soon as possible. Please check your email; we have sent you a confirmation at your Gmail address.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex space-x-4">
        <Link href="/" passHref   className="bg-green-500 hover:bg-green-600 transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
          
            Go to Home
          
        </Link>
        <Link href="/contact" passHref className="bg-white text-purple-600 hover:bg-gray-100 transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
        
            Contact Us
         
        </Link>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 opacity-30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default ConfirmationPage;
