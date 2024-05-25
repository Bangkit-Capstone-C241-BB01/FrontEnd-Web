import { useState } from "react";
import Nav from "../../components/Nav";
import { FaFileUpload, FaTimesCircle } from "react-icons/fa";
import profile from "../../assets/profile.jpg";
const Profile = () => {
  const [product, setProduct] = useState({
    ShopName: "",
    SellerName: "",
    SellerEmail: "",
    imagePreviewUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProduct({
        ...product,
        imagePreviewUrl: reader.result,
      });
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

    setProduct({
      ...product,
      imagePreviewUrl: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setProduct({
      ShopName: "",
      SellerName: "",
      SellerEmail: "",
      imagePreviewUrl: "",
    });
  };

  return (
    <div className="flex ">
      <Nav />
      <div className="ml-0 lg:ml-64 p-4 mt-5 w-full font-roboto">
        <div className=" mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 w-full mt-2 lg:mt-0">Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 mb-2">
                <img src={product.imagePreviewUrl || profile} alt="Profile picture" className="w-full h-full" />
              </div>
              <div className="flex items-center">
                <label className={`cursor-pointer ${product.imagePreviewUrl ? "hidden" : "bg-gray-200 hover:bg-gray-300"} text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center`} htmlFor="image">
                  <FaFileUpload className="w-4 h-4 mr-2" />
                  Change Image
                </label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="hidden" />
                {product.imagePreviewUrl && (
                  <div className="flex items-center">
                    <button type="button" className="ml-2 text-red-600 hover:text-red-800 focus:outline-none flex items-center" onClick={handleRemoveImage}>
                      <FaTimesCircle className="w-8 h-8" />
                      <p className="ml-1 lg:text-md">Cancel</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block text-sm font-bold mb-1 lg:mb-2 lg:text-xl" htmlFor="title">
                Shop Name
              </label>
              <input
                type="text"
                id="ShopName"
                name="ShopName"
                value={product.ShopName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Shop Name"
              />
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block  text-sm font-bold mb-1 lg:text-xl lg:mb-2" htmlFor="description">
                Seller Name
              </label>
              <input
                type="text"
                id="SellerName"
                name="SellerName"
                value={product.SellerName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Seller Name"
              />
            </div>
            <div className="mb-2 lg:mb-3">
              <label className="block  text-sm font-bold mb-1 lg:text-xl lg:mb-2" htmlFor="stock">
                Email
              </label>
              <input
                type="email"
                id="SellerEmail"
                name="SellerEmail"
                value={product.SellerEmail}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-secondary hover:opacity-90 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
