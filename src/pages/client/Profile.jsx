import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import { FaFileUpload, FaTimesCircle } from "react-icons/fa";
import profile from "../../assets/profile.jpg";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, updateUserProfile } from "../../redux/features/profile/profileThunks";
const Profile = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    dispatch(fetchUserProfile("customer"));
  }, [dispatch]);

  useEffect(() => {
    if (profileState.profileData) {
      setProfileData(profileState.profileData);
    }
  }, [profileState.profileData]);

  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    imagePreviewUrl: "",
  });

  useEffect(() => {
    if (profileData) {
      setData({
        name: profileData.user_name || "",
        email: profileData.user_email || "",
        address: profileData.user_address || "",
        phone: profileData.user_phone || "",
        imagePreviewUrl: "",
      });
    }
  }, [profileData]);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData({
        ...data,
        imagePreviewUrl: reader.result,
      });
      setImageFile(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    const input = document.getElementById("image");
    if (input) {
      input.value = "";
    }

    setData({
      ...data,
      imagePreviewUrl: "",
    });
    setImageFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (imageFile) {
      formData.append("img_user", imageFile);
    }
    formData.append("user_email", data.email);
    formData.append("user_name", data.name);
    formData.append("user_phone", data.phone);
    formData.append("user_address", data.address);
    const role = "customer";
    dispatch(updateUserProfile({ role: role, profileData: formData }));

    setData({
      name: "",
      email: "",
      address: "",
      phone: "",
      imagePreviewUrl: "",
    });
    setImageFile(null);
  };
  useEffect(() => {
    if (profileState.updateStatus === "succeeded") {
      window.location.reload();
    }
  }, [profileState.updateStatus]);

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex  pb-14 h-screen">
        <div className="ml-0 p-4  w-full font-roboto">
          <div className=" mx-auto w-full">
            <h1 className="text-3xl font-bold mb-2 w-full mt-1 lg:mt-0">Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full">
              <div className="mb-2 flex flex-col items-center w-1/3">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-2">
                  <img src={data.imagePreviewUrl || profileData.user_img || profile} alt="Profile picture" className="w-full h-full" />
                </div>
                <div className="flex items-center">
                  <label className={`cursor-pointer ${data.imagePreviewUrl ? "hidden" : "bg-gray-200 hover:bg-gray-300"} text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center`} htmlFor="image">
                    <FaFileUpload className="w-4 h-4 mr-2" />
                    Change Image
                  </label>
                  <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="hidden" />
                  {data.imagePreviewUrl && (
                    <div className="flex items-center">
                      <button type="button" className="ml-2 text-red-600 hover:text-red-800 focus:outline-none flex items-center" onClick={handleRemoveImage}>
                        <FaTimesCircle className="w-8 h-8" />
                        <p className="ml-1 lg:text-md">Cancel</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-2/3">
                <div className="mb-2 lg:mb-3 ">
                  <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2 lg:mb-3">
                  <label className="block  text-sm font-bold mb-1 lg:text-xl lg:mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="email user"
                  />
                </div>
                <div className="mb-2 lg:mb-3">
                  <label className="block  text-sm font-bold mb-1 lg:text-xl lg:mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="address"
                  />
                </div>
                <div className="mb-2 lg:mb-3">
                  <label className="block  text-sm font-bold mb-1 lg:text-xl lg:mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="phone"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button type="submit" className="bg-secondary hover:opacity-90 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                    Save
                  </button>
                  {profileState.profileLoading && <p>Loading...</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
