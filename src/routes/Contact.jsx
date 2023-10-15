import { useState } from "react";
import { v4 as uuid } from "uuid";

import PageHeading from "../components/PageHeading";

import { setDataToLocasStorage } from "../utils/message";

const Contact = () => {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDataToLocasStorage(formData);
    setFormData({
      id: uuid(),
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-800">
      <div className="py-16 px-4 mx-auto max-w-screen-md">
        <PageHeading title="Contact Us" />
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Krisna Saputra"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg bg-white w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
