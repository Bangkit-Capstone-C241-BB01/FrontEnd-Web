const AdminDashboardTable = ({ data }) => {
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
  if (!data || !data.dashboard || data.dashboard.length === 0) {
    return <div>Loading...</div>;
  }
  return (
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
          {data.dashboard.map((item, index) => (
            <tr key={index}>
              <td className="px-1 py-4 whitespace-nowrap">{item.product_id}</td>
              <td className="px-1 py-4 whitespace-nowrap hidden lg:block">{item.user_name}</td>
              <td className="px-1 py-4 whitespace-nowrap">{item.store_id}</td>
              <td className="px-1 py-4 whitespace-nowrap">{item.product_name}</td>
              <td className="px-1 py-4 whitespace-nowrap hidden lg:block">{item.user_email}</td>
              <td className={`px-1 py-4 whitespace-nowrap ${getImageQualityColor(item.img_quality)}`}>{item.img_quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboardTable;
