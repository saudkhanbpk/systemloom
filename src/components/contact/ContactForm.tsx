// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import CommonButton from "../common/Button";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import axios from 'axios';
import { backend_url } from '@/newLayout';
import { toast } from 'react-toastify';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Loading state

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit

    try {
      const res = await axios.post(`${backend_url}/api/v1/contact/send`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }); 
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-around items-start gap-10 mt-20">
        <div className="max-w-lg">
          <h1 className="font-inter font-semibold text-3xl sm:text-4xl text-white leading-snug">
            Let's talk with us
          </h1>
          <p className="mt-4 font-inter font-light text-lg text-white">
            Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
          </p>
          <div className="mt-8">
            <p className="flex gap-2 items-start">
              <MapPin color="#A445B8" />
              <span>TechCreator Software Company, Located on Mardan road Near Muneer Hospital, Swabi <br /> Swabi, Pakistan-23430</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="flex gap-2 items-center">
              <PhoneCall color="#A445B8" />
              <span>+92-311-9265290</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="flex gap-2 items-center">
              <Mail color="#A445B8" />
              <span>contact@techcreator.co</span>
            </p>
          </div>
        </div>

        <div className="sm:w-[565px] shadow-lg p-6 sm:p-10 mt-10 sm:mt-0 h-full w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:gap-5 mb-4">
            <input
              placeholder="First name*"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeEventHandler}
              required
              className="w-full sm:w-1/2 rounded-lg border border-gray-300 bg-transparent p-3 text-white focus:border-purple-700 focus:outline-none mb-4 sm:mb-0"
            />
            <input
              placeholder="Last name*"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeEventHandler}
              required
              className="w-full sm:w-1/2 rounded-lg border border-gray-300 bg-transparent p-3 text-white focus:border-purple-700 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email*"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeEventHandler}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white focus:border-purple-700 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Phone Number*"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeEventHandler}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white focus:border-purple-700 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message..."
              rows={4}
              name="message"
              value={formData.message}
              onChange={changeEventHandler}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white focus:border-purple-700 focus:outline-none"
            />
          </div>
          <div>
            <CommonButton
              title={loading ? "Sending..." : "Send Message"}
              type="submit" 
              disabled={loading} 
              className={`bg-purple-700 text-white w-full h-12 rounded-full transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'} focus:outline-none`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
