'use client'
import React, { useState } from "react";
import Headers from "../component/Headers";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import customFormAnimation from "../constants/customform.json";
import Navbar from "../component/Navbar";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    stitchPattern: "",
    address: "",
    city: "",
    country: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1048576) {
      setFormData({ ...formData, image: file });
    } else {
      alert("File must be under 1MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
          stitchPattern: "",
          address: "",
          city: "",
          country: "",
          image: null,
        });
      })
      .catch((error) => {
        alert("Error sending form. Try again.");
      });
  };

  return (
    <section className="py-14 md:mt-14 md:pt-1 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg md:max-w-5xl lg:w-full">
        <Navbar />
      {/* Form & Lottie Grid Layout */}
      <div className="mt-8 md:mx-5 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
        
        {/* Left Side: Form */}
        <div>
          <Headers title="Custom Apparel Order Form" />
          <form onSubmit={handleSubmit} className="pt-4 " encType="multipart/form-data">
            
            {/* Grid Layout for Large Screens */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-4">
              
              {/* Your Information */}
              <div className="space-y-4">
                <label className="block pt-8">Your Information</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
              </div>

              {/* Delivery Information */}
              <div className="space-y-4">
                <label className="block pt-8">Delivery Information</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border rounded" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" required />
                  <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="w-full p-2 border rounded" required />
                </div>
              </div>

              {/* Crotchet Order Information (Spans full width on large screens) */}
              <div className="lg:col-span-2 space-y-4">
                <label className="block pt-7">Crotchet Order Information</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the item, Body size Measurement, color needed." className="w-full h-32 p-2 border rounded" required></textarea>
                <input type="text" name="stitchPattern" value={formData.stitchPattern} onChange={handleChange} placeholder="Stitch Pattern (Optional)" className="w-full p-2 border rounded" />
                <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />
              </div>

              {/* Submit Button (Spans full width on large screens) */}
              <div className="lg:col-span-2">
                <button type="submit" className="w-full  p-2 ppercase rounded-md text-white bg-orange-700">Submit</button>
              </div>

            </div>
          </form>
        </div>

        {/* Right Side: Lottie Animation (Visible on large screens) */}
        <div >
          <Lottie animationData={customFormAnimation} className="w-full hidden lg:block max-w-5xl mx-auto" />
          <div className="pt-14">
        <p className="font-extrabold text-red-800">*Note</p>
        <ul className="list-disc pl-5 text-black/70 leading-8 font-serif">
          <li>After submitting this form you'll get your invoice through your mail and you have 3 days to make payment.</li>
          <li>Payment validates your Order.</li>
          <li>Order processing takes Three - Four weeks, anything more or less will be communicated.</li>
          <li>The file size uploaded should not be more than 2MB. Feel free to compress if more than 2MB.</li>
        </ul>
      </div>
        </div>

      </div>

    </section>
  );
};

export default CustomForm;


