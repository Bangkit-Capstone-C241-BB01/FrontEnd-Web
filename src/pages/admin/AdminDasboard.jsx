import { useState } from "react";
import Nav from "../../components/Nav";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

const AdminDasboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const data = [
    {
      id: 1000,
      sellerName: "John Doe",
      storeId: "1234",
      productName: "Product 1",
      emailAddress: "john.doe@example.com",
      imageQuality: " Blur",
    },
    {
      id: 2,
      sellerName: "Jane Smith",
      storeId: "5678",
      productName: "Product 2",
      emailAddress: "jane.smith@example.com",
      imageQuality: "Bokeh",
    },
    {
      id: 3,
      sellerName: "Mike Johnson",
      storeId: "91011",
      productName: "Product 3",
      emailAddress: "mike.johnson@example.com",
      imageQuality: "HD",
    },
    {
      id: 4,
      sellerName: "Emily Brown",
      storeId: "121314",
      productName: "Product 4",
      emailAddress: "emily.brown@example.com",
      imageQuality: "Blur",
    },
    {
      id: 5,
      sellerName: "Michael Davis",
      storeId: "151617",
      productName: "Product 5",
      emailAddress: "michael.davis@example.com",
      imageQuality: "Bokeh",
    },
    {
      id: 6,
      sellerName: "Sarah Wilson",
      storeId: "181920",
      productName: "Product 6",
      emailAddress: "sarah.wilson@example.com",
      imageQuality: "HD",
    },
    {
      id: 7,
      sellerName: "David Martinez",
      storeId: "212223",
      productName: "Product 7",
      emailAddress: "david.martinez@example.com",
      imageQuality: "Blur",
    },
    {
      id: 8,
      sellerName: "Jennifer Anderson",
      storeId: "242526",
      productName: "Product 8",
      emailAddress: "jennifer.anderson@example.com",
      imageQuality: "Bokeh",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const getImageQualityColor = (quality) => {
    switch (quality.trim().toLowerCase()) {
      case "blur":
        return "bg-red-500 text-white";
      case "bokeh":
        return "bg-yellow-500 text-white";
      case "hd":
        return "bg-green-500 text-white";
      default:
        return "";
    }
  };
  return (
    <>
      <Header role="admin" />
      <div className="flex ">
        <Nav role="admin" />
        <div className="ml-0 lg:ml-64 p-4 w-full font-roboto">
          <div className="flex justify-around">
            <div className="xl:w-64 lg:w-48 lg:h-32 w-28 h-24 bg-blue-400 rounded-md flex flex-col justify-center">
              <p className="text-center text-xl font-bold">Total User</p>
              <p className="text-center text-xl">10</p>
            </div>
            <div className="xl:w-64 lg:w-48  lg:h-32 w-28 h-24 bg-yellow-400 rounded-md flex flex-col justify-center">
              <p className="text-center text-xl font-bold">Total Order</p>
              <p className="text-center text-xl">200</p>
            </div>
            <div className="xl:w-64 lg:w-48  lg:h-32 w-28 h-24 bg-purple-400 rounded-md flex flex-col justify-center">
              <p className="text-center text-xl font-bold">Total Sales</p>
              <p className="text-center text-xl">400000</p>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <PieChart data={data} />
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-4">Seller Products Monitoring</h1>
            <table className="min-w-full divide-y divide-gray-200 text-center">
              <thead className="bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-1 py-2  text-xs font-bold  uppercase tracking-wider">
                    Product ID
                  </th>
                  <th scope="col" className="px-1 py-3 hidden lg:block text-xs font-bold  uppercase tracking-wider">
                    Seller Name
                  </th>
                  <th scope="col" className="px-1 py-3  text-xs font-bold  uppercase tracking-wider">
                    Store ID
                  </th>
                  <th scope="col" className="px-1 py-3  text-xs font-bold  uppercase tracking-wider">
                    Product Name
                  </th>
                  <th scope="col" className="px-1 py-3 hidden lg:block  text-xs font-bold  uppercase tracking-wider">
                    Email Address
                  </th>
                  <th scope="col" className="px-1 py-3 text-xs font-bold  uppercase tracking-wider">
                    Image Quality
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-1 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="px-1 py-4 whitespace-nowrap hidden lg:block ">{item.sellerName}</td>
                    <td className="px-1 py-4 whitespace-nowrap">{item.storeId}</td>
                    <td className="px-1 py-4 whitespace-nowrap">{item.productName}</td>
                    <td className="px-1 py-4 whitespace-nowrap hidden lg:block ">{item.emailAddress}</td>
                    <td className={`px-1 py-4 whitespace-nowrap ${getImageQualityColor(item.imageQuality)}`}>{item.imageQuality.trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button key={page} className={`${page === currentPage ? "bg-secondary text-white" : "bg-white text-gray-700"} border border-gray-300 px-3 py-1 mx-1 rounded`} onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDasboard;
