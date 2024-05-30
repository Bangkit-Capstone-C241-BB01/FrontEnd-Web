import React from "react";
import Nav from "../../components/Nav";
import { BiSolidUser } from "react-icons/bi";
const AdminProfile = () => {
  return (
    <div className="flex ">
      <Nav role="admin" />
      <div className="ml-0 lg:ml-64 p-4 mt-5 w-full font-roboto">
        <div className=" mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 w-full mt-2 lg:mt-0">Profile</h1>
          <form>
            <div className="mb-2 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border border-black flex justify-center items-center mb-2">
                <BiSolidUser className="w-48 h-48" />
              </div>
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="title">
                ADMIN ID
              </label>
              <input type="text" id="AdminID" name="AdminID" className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" Value="ADMIN123456" readOnly />
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="title">
                Username
              </label>
              <input type="text" id="Username" name="Username" className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" Value="ADMIN123456" readOnly />
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="title">
                Email
              </label>
              <input type="email" id="Email" name="Email" className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" Value="Admin@admin.com" readOnly />
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="title">
                Password
              </label>
              <input type="text" id="Email" name="Email" className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" Value="Admin123456" readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
