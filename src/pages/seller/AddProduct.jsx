import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/features/seller/product/productThunks";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { FaFileUpload, FaTimesCircle } from "react-icons/fa";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.sellerProduct);
  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    product_spec: "",
    product_desc: "",
    product_stock: "",
    product_category: "",
    img_product: null,
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
    setProduct({
      ...product,
      img_product: file,
    });
  };

  const handleRemoveImage = () => {
    const input = document.getElementById("image");
    if (input) {
      input.value = "";
    }
    setProduct({
      ...product,
      img_product: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({
      product_name: "",
      product_price: "",
      product_spec: "",
      product_desc: "",
      product_category: "",
      product_stock: "",
      img_product: null,
    });
  };

  return (
    <>
      <Header role="seller" />
      <div className="flex">
        <Nav role="seller" />
        <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add Product</h1>
            {loading && <div className="rounded-md  text-center bg-gray-500 mb-4 text-white">Loading...</div>}
            {error && <div className="rounded-md  text-center bg-red-500 mb-4 text-white">Error: {error.msg}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="image">
                  Gambar Produk
                </label>
                <div className="flex items-center">
                  <label className={`cursor-pointer ${product.img_product ? "hidden" : "bg-gray-200 hover:bg-gray-300"} text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center`} htmlFor="image">
                    <FaFileUpload className="w-4 h-4 mr-2" />
                    Choose File
                  </label>
                  <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="hidden" />
                  {product.img_product && (
                    <div className="flex items-center">
                      <img src={URL.createObjectURL(product.img_product)} alt="Preview" className="ml-4 w-20 h-20 object-cover rounded" />
                      <button type="button" className="ml-2 text-red-600 hover:text-red-800 focus:outline-none flex items-center" onClick={handleRemoveImage}>
                        <FaTimesCircle className="w-8 h-8" />
                        <p className="ml-2 lg:text-md">Hapus Gambar</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  value={product.product_name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_price">
                  Price
                </label>
                <input
                  type="number"
                  id="product_price"
                  name="product_price"
                  value={product.product_price}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_spec">
                  Product Spec
                </label>
                <textarea
                  id="product_spec"
                  name="product_spec"
                  value={product.product_spec}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_desc">
                  Product Description
                </label>
                <textarea
                  id="product_desc"
                  name="product_desc"
                  value={product.product_desc}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_stock">
                  Stock
                </label>
                <input
                  type="number"
                  id="product_stock"
                  name="product_stock"
                  value={product.product_stock}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="product_category">
                  Category
                </label>
                <input
                  type="text"
                  id="product_category"
                  name="product_category"
                  value={product.product_category}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
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
