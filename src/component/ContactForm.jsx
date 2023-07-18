/* eslint-disable react/prop-types */
import { useState } from "react";

const ContactForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    id: ""
  });

  //const [errors, setErrors] = useState({});
  //const [counter, setCounter] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation logic here
    // const validationErrors = {};
    // if (formData.name.trim() === "") {
    //   validationErrors.name = "Name is required";
    // }
    // if (formData.email.trim() === "") {
    //   validationErrors.email = "Email is required";
    // }
    // if (formData.message.trim() === "") {
    //   validationErrors.message = "Message is required";
    // }

    // setErrors(validationErrors);

   
    // if (Object.keys(validationErrors).length === 0) {
     const data  = {...formData, id: Date.now}
     console.log("Form submitted:", data);
      addItem(data);
      //setCounter(counter => counter + 1);
      setFormData("");
      
   // }
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        {/* Form elements */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input name="name" onChange={(e) => handleChange(e)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input name="email" onChange={(e) => handleChange(e)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
          <textarea name="message" onChange={(e) => handleChange(e)} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
