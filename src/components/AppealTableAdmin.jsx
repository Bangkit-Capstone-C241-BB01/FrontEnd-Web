import { MdClose } from "react-icons/md";
import { BiZoomIn } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveAdAppeal, rejectAdAppeal } from "../redux/features/admin/adminAppeal/adAppealThunks";

const AppealTableAdmin = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.adminAppeal);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  const handleApprove = (id) => {
    dispatch(approveAdAppeal(id));
  };

  const handleReject = (id) => {
    dispatch(rejectAdAppeal(id));
  };

  const getImageQualityColor = (quality) => {
    switch (quality.trim().toLowerCase()) {
      case "blur":
        return "bg-red-500 text-white";
      case "bokeh":
        return "bg-yellow-500 text-white";
      case "normal":
        return "bg-green-500 text-white";
      default:
        return "";
    }
  };
  return (
    <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
      <h1 className="text-2xl font-bold mb-4">Admin Appeals</h1>

      {loading && <div>Loading...</div>}
      {success && <div className="text-green-500">{success.msg}</div>}
      {error && <div className="text-red-500">{error.msg}</div>}

      <table className="table-auto w-full border-collapse border border-gray-200 -z-10">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Username</th>
            <th className="border border-gray-200 p-2">Product Name</th>
            <th className="border border-gray-200 p-2">Image Quality</th>
            <th className="border border-gray-200 p-2">Image</th>
            <th className="border border-gray-200 p-2">Reason</th>
            <th className="border border-gray-200 p-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((appeal, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">{appeal.user_name}</td>
              <td className="border border-gray-200 p-2">{appeal.product_name}</td>
              <td className={`px-1  whitespace-nowrap ${getImageQualityColor(appeal.img_quality)}`}>{appeal.img_quality}</td>
              <td className="border border-gray-200 p-2 flex flex-col justify-center items-center relative">
                <img src={appeal.product_img} alt="product" className="w-16 h-16 object-cover z-0 cursor-pointer mb-1" onClick={() => setSelectedImage(appeal.product_img)} />
                <button className="absolute top-1 right-1 text-xl text-white bg-blue-600 p-1 rounded-full" onClick={() => setSelectedImage(appeal.product_img)}>
                  <BiZoomIn />
                </button>
              </td>
              <td className="border border-gray-200 p-2">{appeal.appeal_desc}</td>
              <td className="border border-gray-200 p-2 ">
                <button className="bg-green-500 text-white p-2 m-1 rounded" onClick={() => handleApprove(appeal.appeal_id)}>
                  Approve
                </button>
                <button className="bg-red-500 text-white p-2 m-1 rounded" onClick={() => handleReject(appeal.appeal_id)}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-slate-500 p-3 rounded shadow-lg overflow-auto">
            <button className="absolute top-1 right-1 text-2xl text-gray-700 border border-gray-300 rounded-full p-1 bg-white" onClick={() => setSelectedImage(null)}>
              <MdClose />
            </button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppealTableAdmin;
