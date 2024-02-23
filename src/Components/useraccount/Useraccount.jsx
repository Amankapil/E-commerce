import React from "react";

const Useraccount = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-200 px-6 py-3">
          <h2 className="text-lg font-semibold text-gray-800">User Profile</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Username"
              //   readOnly
              //   value="example_user"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email Address"
              //   readOnly
              //   value="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              id="fullName"
              type="text"
              placeholder="Full Name"
              //   readOnly
              //   value="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full h-24 focus:outline-none focus:border-blue-500"
              id="address"
              placeholder="Address"
              //   readOnly
              //   value="123 Main Street, City, Country"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              id="phone"
              type="tel"
              placeholder="Phone Number"
              //   readOnly
              //   value="123-456-7890"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Useraccount;
