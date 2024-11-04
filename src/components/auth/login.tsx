// pages/login.tsx
"use client";
import { Facebook } from 'lucide-react';
import React, { useState, ChangeEvent } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'jobSeeker',
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-gray-900 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-16 items-center'>
        
        {/* Image - Hidden on small screens */}
        <div className='w-[300px] md:w-[600px] hidden md:block'>
          <motion.img 
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
            alt="Login Illustration" 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Form Container */}
        <div className='w-full max-w-md text-white'>
          <form>
            <motion.div 
              className='flex flex-col md:flex-row gap-6 items-center text-white'
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1>Sign in with</h1>
              <div className='flex gap-3'>
                <Facebook className='cursor-pointer border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full' size={30} />
                <FaGoogle className='cursor-pointer border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full' size={30} />
                <FaGithub className='cursor-pointer border-2 border-white bg-blue-700 w-10 h-10 p-2 rounded-full' size={30} />
              </div>
            </motion.div>

            <div className='flex items-center gap-3 mt-6'>
              <hr className='h-2 text-white flex-1' />
              <p className='-mt-4 text-2xl font-bold'>or</p>
              <hr className='h-2 text-white flex-1' />
            </div>

            {/* Email Field */}
            <div className='mb-4'>
              <h2 className='mb-2'>Email</h2>
              <div className='flex items-center border-2 border-gray-500 rounded'>
                <FaEnvelope className='text-gray-500 p-2' size={24} />
                <input 
                  type="email" 
                  name="email"
                  placeholder='Email address' 
                  className='w-full px-2 py-3 outline-none bg-gray-900 text-white' 
                  autoComplete="off"
                  value={formData.email}
                  onChange={changeEventHandler}
                  required 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='mb-4'>
              <h2 className='mb-2'>Password</h2>
              <div className='flex items-center border-2 border-gray-500 rounded'>
                <FaLock className='text-gray-500 p-2' size={24} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder='************'
                  className='w-full px-2 py-3 outline-none bg-gray-900 text-white'
                  autoComplete="off"
                  value={formData.password}
                  onChange={changeEventHandler}
                  required 
                />
                <div 
                  className='p-2 cursor-pointer' 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className='text-gray-500' size={24} /> : <FaEye className='text-gray-500' size={24} />}
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className='mb-4'>
              <div className='flex items-center gap-4'>
                <label className='flex items-center cursor-pointer'>
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
                <label className='flex items-center cursor-pointer'>
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
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>

            <p className='mt-4 text-center text-gray-400'>
              Already registered?{' '}
              <Link href="/register" className='text-blue-500 hover:underline'>
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
