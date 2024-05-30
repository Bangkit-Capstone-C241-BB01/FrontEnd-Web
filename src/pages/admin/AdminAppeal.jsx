import React, { useState } from "react";
import headset from "../../assets/hetset.jpg";
import kacamatahitam from "../../assets/kacamatahitam.jpg";
import { MdClose } from "react-icons/md";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

const appeals = [
  {
    storeId: 1,
    productId: 101,
    image: headset,
    reason: "Image misclassified",
  },
  {
    storeId: 2,
    productId: 202,
    image: kacamatahitam,
    reason: "High quality image misidentified",
  },
];

const AdminAppeals = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Header role="admin" />
      <div className="flex ">
        <Nav role="admin" />
        <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
          <h1 className="text-2xl font-bold mb-4">Admin Appeals</h1>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2">Store ID</th>
                <th className="border border-gray-200 p-2">Product ID</th>
                <th className="border border-gray-200 p-2">Image</th>
                <th className="border border-gray-200 p-2">Reason</th>
                <th className="border border-gray-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {appeals.map((appeal, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 p-2">{appeal.storeId}</td>
                  <td className="border border-gray-200 p-2">{appeal.productId}</td>
                  <td className="border border-gray-200 p-2 flex flex-col justify-center items-center">
                    <img src={appeal.image} alt="product" className="w-16 h-16 object-cover cursor-pointer mb-1" onClick={() => setSelectedImage(appeal.image)} />
                    <button className="bg-blue-600 text-white p-1 rounded" onClick={() => setSelectedImage(appeal.image)}>
                      Look Image
                    </button>
                  </td>
                  <td className="border border-gray-200 p-2">{appeal.reason}</td>
                  <td className="border border-gray-200 p-2">
                    <button className="bg-green-500 text-white p-2 mr-2 rounded">Approve</button>
                    <button className="bg-red-500 text-white p-2 rounded">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
              <div className="relative bg-slate-500 p-3 rounded shadow-lg  h-3/4 overflow-auto">
                <button className="absolute top-1 right-1 text-2xl text-gray-700 border border-gray-300 rounded-full p-1 bg-white" onClick={() => setSelectedImage(null)}>
                  <MdClose />
                </button>
                <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminAppeals;
