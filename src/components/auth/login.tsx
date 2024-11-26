import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { backend_url } from '@/newLayout';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setUser } from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false);

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const res = await axios.post(`${backend_url}/api/v1/user/login`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        // Dispatch user data to Redux state
        dispatch(setUser(res.data.user));

        // Redirect based on user role
        if (res.data.user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }

        toast.success(res.data.message);
        setFormData({ email: '', password: '' });
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user]);

  const handleGoogleLogin = () => {
    window.location.href = `${backend_url}/auth/google`;  // Redirect to backend for Google login
  };

  

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-900 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-16 items-center'>
        
        {/* Image - Hidden on small screens */}
        <div className='w-[300px] md:w-[400px] mt-10 hidden md:block'>
          <motion.img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login Illustration"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Form Container */}
        <div className='text-white w-full max-w-md'>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="flex flex-col md:flex-row gap-6 w-[320px] md:w-full justify-center mx-auto md:mx-0 items-center text-white"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-2xl font-semibold">Sign in with</h1>
              <div className="flex gap-4">
                {/* Continue with Google Button */}
                <button
                  onClick={handleGoogleLogin} 
                  className="flex items-center gap-3 cursor-pointer border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 w-full md:w-64 h-12 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                  type="button" 
                >
                  <FaGoogle className="text-white" size={24} />
                  <span className="text-white font-medium">Continue with Google</span>
                </button>
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
                <FaEnvelope className='text-gray-500 p-2' size={32} />
                <input
                  type="email"
                  name="email"
                  placeholder='Email address'
                  className='w-full px-2 py-3 outline-none bg-gray-900 text-white'
                  autoComplete="off"
                  value={formData.email}
                  onChange={changeEventHandler}
                  required
                  aria-label="Email address"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='mb-4'>
              <h2 className='mb-2'>Password</h2>
              <div className='flex items-center border-2 border-gray-500 rounded'>
                <FaLock className='text-gray-500 p-2' size={32} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder='************'
                  className='w-full px-2 py-3 outline-none bg-gray-900 text-white'
                  value={formData.password}
                  onChange={changeEventHandler}
                  required
                  aria-label="Password"
                />
                <div
                  className='p-2 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash className='text-gray-500' size={16} /> : <FaEye className='text-gray-500' size={16} />}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Logging in...' : 'Login'}
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
}

export default Login;
