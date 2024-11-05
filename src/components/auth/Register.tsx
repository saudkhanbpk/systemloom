// pages/register.tsx
"use client";
import { Facebook, Github } from 'lucide-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    role: 'jobSeeker' 
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic, e.g., send data to API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 md:px-0">
      <motion.div
        className="flex flex-col md:flex-row md:gap-16 md:my-52 my-28 items-center w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full md:w-[600px] mb-8 md:mb-0"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Illustration" className="w-full  h-auto object-cover hidden md:block" />
        </motion.div>

        <motion.div className="text-white w-full max-w-sm" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-6 items-center text-white">
              <h1>Sign up with</h1>
              <div className="flex gap-3">
                <Facebook className="border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full cursor-pointer" size={30} />
                <FaGoogle className="border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full cursor-pointer" size={30} />
                <Github className="border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full cursor-pointer" size={30} />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <hr className="h-2 text-white w-24 md:w-44" />
              <p className="-mt-4 text-xl md:text-2xl font-bold">or</p>
              <hr className="h-2 text-white w-24 md:w-44" />
            </div>

            <div>
              <div className="mb-4">
                <h2 className="mb-2">Full Name</h2>
                <div className="flex items-center border-2 border-gray-500 rounded">
                  <FaUser className="text-gray-500 p-2" size={24} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    className="w-full px-2 py-3 outline-none bg-gray-900 text-white" 
                    value={formData.name}
                    onChange={changeEventHandler}
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <h2 className="mb-2">Email</h2>
                <div className="flex items-center border-2 border-gray-500 rounded">
                  <FaEnvelope className="text-gray-500 p-2" size={24} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    className="w-full px-2 py-3 outline-none bg-gray-900 text-white" 
                    autoComplete="off" 
                    value={formData.email}
                    onChange={changeEventHandler}
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <h2 className="mb-2">Password</h2>
                <div className="flex items-center border-2 border-gray-500 rounded">
                  <FaLock className="text-gray-500 p-2" size={24} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="************"
                    className="w-full px-2 py-3 outline-none bg-gray-900 text-white"
                    autoComplete="off"
                    value={formData.password}
                    onChange={changeEventHandler}
                    required
                  />
                  <div className="p-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash className="text-gray-500" size={24} /> : <FaEye className="text-gray-500" size={24} />}
                  </div>
                </div>
              </div>

              {/* <div className="mb-4">
                <div className="flex items-center gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="role" 
                      value="jobSeeker" 
                      checked={formData.role === 'jobSeeker'} 
                      onChange={changeEventHandler} 
                      className="mr-2" 
                    />
                    Job Seeker
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="role" 
                      value="admin" 
                      checked={formData.role === 'admin'} 
                      onChange={changeEventHandler} 
                      className="mr-2" 
                    />
                    Admin
                  </label>
                </div>
              </div> */}

              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none cursor-pointer"
              >
                Register
              </button>

              <p className="mt-4 text-center text-gray-400">
                Already registered?{' '}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Log in here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
