"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../component/Buttons";
import Headers from "../component/Headers";

const FormInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Error sending message. Try again.");
      });
  };

  return (
    <section className="py-14 md:mt-12 md:py-8 w-full mx-auto p-6 bg-white shadow-md rounded-lg md:max-w-5xl lg:w-full">
      {/* Form & Lottie Grid Layout */}
      <div className="mt-8 md:mt-2 md:px-14 lg:px-24">
        
        {/* Left Side: Form */}
        <div>
        <Headers title="Contact Us" />
          <form onSubmit={handleSubmit} className="pt-4">
            
            {/* Grid Layout for Large Screens */}
            <div className="lg:grid-cols-2 lg:gap-4 space-y-4">
              
              {/* Personal Information */}
              <div className="space-y-4">
                <label className="block pt-8">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  required 
                />

                <label className="block pt-4">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  required 
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <label className="block pt-8">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  required 
                />
              </div>

              {/* Message Section (Spans full width on large screens) */}
              <div className="lg:col-span-2 space-y-4">
                <h1 className="pt-10 text-xl font-bold">Your Message</h1>

                <label className="block pt-4">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="w-full p-2 border rounded" 
                  required 
                />

                <label className="block pt-4">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full h-32 p-2 border rounded" 
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="lg:col-span-2 ">
                <Button label="Submit" />
              </div>
            </div>
          </form>

          {/* Note */}
          <p className="p-2 mt-6 mb-14 font-light text-sm lg:text-base">
            <span className="text-orange-600">Note: </span>
            You will usually receive a response within 1 – 2 days. If you don’t see a response, please check your spam folder.
          </p>
        </div>

     
 

      </div>
    </section>
  );
};

export default FormInput;

