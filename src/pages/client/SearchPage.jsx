import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCustProductbySearch } from "../../redux/features/client/product/clientProductThunks";
import SearchResult from "../../components/SearchResult";

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.customerProduct);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCustProductbySearch(query));
  }, [dispatch]);

  useEffect(() => {
    if (productState.data) {
      setProductData(productState.data);
    }
  }, [productState.data]);

  if (!productData || productData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex items-center px-4 py-2 bg-slate-100">
        <span className="text-md lg:text-xl ml-2">Hasil Search :</span>
      </div>
      <main className="pt-1 pb-14 lg:pb-0">
        <SearchResult product={productData} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
