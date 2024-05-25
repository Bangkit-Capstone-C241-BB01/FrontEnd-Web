import { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { FaFileUpload, FaTimesCircle } from "react-icons/fa";
const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    stock: "",
    price: "",
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
      title: "",
      description: "",
      stock: "",
      price: "",
      imagePreviewUrl: "",
    });
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Nav />
        <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
          <div className=" mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add Product</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="image">
                  Gambar Produk
                </label>
                <div className="flex items-center">
                  <label className={`cursor-pointer ${product.imagePreviewUrl ? "hidden" : "bg-gray-200 hover:bg-gray-300"} text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center`} htmlFor="image">
                    <FaFileUpload className="w-4 h-4 mr-2" />
                    Choose File
                  </label>
                  <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="hidden" />
                  {product.imagePreviewUrl && (
                    <div className="flex items-center">
                      <img src={product.imagePreviewUrl} alt="Preview" className="ml-4 w-20 h-20 object-cover rounded" />
                      <button type="button" className="ml-2 text-red-600 hover:text-red-800 focus:outline-none flex items-center" onClick={handleRemoveImage}>
                        <FaTimesCircle className="w-8 h-8" />
                        <p className="ml-2 lg:text-md">Hapus Gambar</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="title">
                  Product Title
                </label>
                <input type="text" id="title" name="title" value={product.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="description">
                  Product Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline h-24"
                />
              </div>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="stock">
                  Stock
                </label>
                <input type="number" id="stock" name="stock" value={product.stock} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input type="number" id="price" name="price" value={product.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-secondary hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
