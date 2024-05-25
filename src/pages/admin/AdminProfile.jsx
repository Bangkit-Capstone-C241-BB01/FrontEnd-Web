import React from "react";
import Nav from "../../components/Nav";

const AdminProfile = () => {
  return (
    <div className="flex ">
      <Nav role="admin" />
      <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
        <h1 className="text-2xl lg:text-3xl ml-4 mt-7 lg:mt-3 mb-4">
          <span className="font-bold">ID</span> ADMIN123456
        </h1>
        <form className="ml-4">
          <div className="flex flex-col text-xl mb-2">
            <label htmlFor="username" className="mb-1 font-bold">
              Username
            </label>
            <input readOnly type="text" placeholder="isi dari username admin" className="bg-secondary text-white rounded pb-1 placeholder:text-white pl-3" />
          </div>
          <div className="flex flex-col text-xl mb-2">
            <label htmlFor="email" className="mb-1 font-bold">
              Email
            </label>
            <input readOnly type="email" placeholder="isi dari email admin" className="bg-secondary text-white rounded pb-1 placeholder:text-white pl-3" />
          </div>
          <div className="flex flex-col text-xl mb-2">
            <label htmlFor="password" className="mb-1 font-bold">
              Password
            </label>
            <input readOnly type="password" placeholder="isi dari password admin" className="bg-secondary text-white rounded pb-1 placeholder:text-white pl-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
