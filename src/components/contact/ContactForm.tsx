// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import CommonButton from "../common/Button";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeEventHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/contact/send`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/confirmation");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-around items-start gap-10 mt-20"
    >
      {/* Contact Information */}
      <div className="max-w-lg">
        <h1 className="font-semibold text-3xl sm:text-5xl text-white">Let's talk with us</h1>
        <p className="mt-4 flex gap-2 items-center text-lg">
          <MapPin color="#9A00FF" size={30} />
          TechCreator, Florida, Orlando, USA
        </p>
        <div className="mt-2 space-y-2 text-lg">
          <Link href="https://wa.me/+447511801699" rel="noopener noreferrer" className="flex items-center gap-2.5 text-base">
            <FaWhatsapp size={28} color="#9A00FF" />
            <span className="hover:underline">+44 7511 801699</span>
          </Link>
          <Link href="tel:+13214073272" className="flex items-center gap-2.5 text-base">
            <PhoneCall color="#9A00FF" />
            <span className="hover:underline">+1 (321) 407-3272</span>
          </Link>
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <Mail size={28} color="#9A00FF" />
          <Link href="mailto:contact@techcreator.co" className="hover:underline">
            contact@techcreator.co
          </Link>
        </div>
      </div>
  
      {/* Form Section */}
      <div className="sm:w-[565px] shadow-lg p-6 sm:p-10 bg-white text-black rounded-md">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            placeholder="First name*"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none"
          />
          <input
            placeholder="Last name*"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none"
          />
        </div>
        <input
          placeholder="Email*"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none mb-4"
        />
     {/* PhoneInput  */}
     <div className="w-full mb-4">
  <PhoneInput
    country={"us"} 
    value={formData.phoneNumber}
    onChange={handlePhoneChange}
    containerClass=" rounded-lg " 
    containerStyle={{ width: '100%' }}
  inputStyle={{ width: '100%' }}
    inputClass="w-full text-black bg-gray-100 border-none rounded-lg p-6 focus:ring-1 focus:ring-purple-700 focus:outline-none"
    buttonClass="bg-gray-100 rounded-l-lg border-r border-gray-300"
    dropdownClass="bg-white text-black rounded-lg shadow-lg"
  />
</div>



        <textarea
          placeholder="Your Message..."
          rows={4}
          name="message"
          value={formData.message}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none mb-6"
        />
        <CommonButton
          title={loading ? "Sending..." : "Send Message"}
          type="submit"
          disabled={loading}
          className={`bg-purple-600 text-white w-full h-12 rounded-full shadow-[0_4px_16px_-4px_#3b71ca] transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
          } focus:outline-none`}
        />
      </div>
    </form>
  </div>
  
  );
};

export default ContactForm;
