"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonButton from "../common/Button";
import { FC } from "react";
import CareerSectionImage from "../../../public/assets/careerpage/Rectangle 402.webp";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";

const CareerHeroSection: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    jobField: "",
    professionalUrl: "",
    resume: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("jobField", formData.jobField);
    formDataToSend.append("professionalUrl", formData.professionalUrl);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/resume/send`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
// console.log("resume",res)
      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          location: "",
          jobField: "",
          professionalUrl: "",
          resume: null,
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.log("Error:", error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className={`${isDialogOpen ? "blurred" : ""}`}>
      <div className="relative bg-black text-white h-[644px]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-8 md:mb-12 md:p-10 md:mt-0 mt-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Be Who You Are. Do What You Love
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Are you at your best in an atmosphere of trust, knowhow, freedom
              and support, alongside talented and creative people just like you?
              That's our working style.
            </p>
            <CommonButton
              className="bg-[#9A00FF] hover:bg-purple-700 text-white px-6 py-3 rounded-[12px] transition-colors w-[228px] h-[48px]"
              title="Send your resume"
              handleClick={handleDialogOpen}
            />
          </div>
          <div className="relative">
            <div className="absolute lg:left-[308px] lg:-top-20 md:left-0 md:top-0 top-5 overflow-hidden w-full md:w-auto">
              <Image
                src={CareerSectionImage}
                width={400}
                height={400}
                alt="Team collaboration"
                className="w-full h-full rounded-[24px] md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div
        className="absolute inset-0 mt-2  flex items-center justify-center  p-4 sm:p-6 z-50 overflow-y-auto"

          onClick={handleDialogClose}
        >
          <div
            className="text-white px-2 pb-2 sm:w-[400px] md:w-[600px] max-w-full relative z-50 h-fit w-full bg-white rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold ">Submit Your Resume</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg  text-black outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg text-black outline-none"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black">Phone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg  text-black outline-none"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="mb-4">
  <label className="block text-black">Location</label>
  <input
    type="text" 
    name="location" 
    value={formData.location}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-500 rounded-lg text-black outline-none"
    placeholder="Enter your location (Country & City)" 
    required
  />
</div>

              <div className="mb-4">
                <label className="block text-black">Field</label>
                <input
                  type="text"
                  name="jobField"
                  value={formData.jobField}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg text-black outline-none"
                  placeholder="Your field"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black">Professional URL</label>
                <input
                  type="url"
                  name="professionalUrl"
                  value={formData.professionalUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg  text-black outline-none"
                  placeholder="LinkedIn or other professional link"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg text-black"
                  required
                />
              </div>
              <div className="flex md:justify-end justify-start">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleDialogClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#9A00FF] hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerHeroSection;
