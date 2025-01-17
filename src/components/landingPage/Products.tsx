"use client"
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="md:py-16  ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold  text-purple-600">Our Products</h2>
       
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  md:gap-6 gap-10">
        {/* Product Card 1 */}
        <div className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col ">
  <h3 className="text-2xl font-semibold text-gray-900">Business Management System</h3>
  <p className="text-gray-600 mt-4 text-base flex-grow">
  Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and any location.
  </p>
  <Link href="/contact" className="mt-auto flex justify-center">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
    >
      Schedule Demo &nbsp;→
    </motion.button>
  </Link>
</div>

        {/* Product Card 2 */}
        <div className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col h-full">
  <h3 className="text-2xl font-semibold text-gray-900">School Management Portal</h3>
  <p className="text-gray-600 mt-4 text-base flex-grow">
  Our all-encompassing School Management Portal is the only solution needed for any institution. The School Management Portal (SMP) is a tool that can help educational institutions manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.
  </p>
  <Link href="/contact" className="mt-auto flex justify-center">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
    >
      Schedule Demo &nbsp;→
    </motion.button>
  </Link>
</div>

        {/* Product Card 3 */}
        <div className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col h-full">
  <h3 className="text-2xl font-semibold text-gray-900">Payroll Management System</h3>
  <p className="text-gray-600 mt-4 text-base flex-grow">
  The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually. With this system in place, you enjoy benefits such as increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
  </p>
  <Link href="/contact" className="mt-auto flex justify-center">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
    >
      Schedule Demo &nbsp;→
    </motion.button>
  </Link>
</div>

        {/* Product Card 4 */}
        <div className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col h-full">
  <h3 className="text-2xl font-semibold text-gray-900">Event Management System</h3>
  <p className="text-gray-600 mt-4 text-base flex-grow">
    Our event management system helps to manage different types of events, whether weddings, burials, or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable. With use cases already recorded for quite a number of events, we can assure you of a stress-less event management platform.
  </p>
  <Link href="/contact" className="mt-auto flex justify-center">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
    >
      Schedule Demo &nbsp;→
    </motion.button>
  </Link>
</div>


      </div>
    </div>
  );
};

export default Products;
