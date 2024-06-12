import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchClientStore } from "../../redux/features/client/storeList/storeListThunks";
import StoreList from "../../components/StoreList";

const StorePage = () => {
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state.customerStore);
  const [storeData, setStoreData] = useState();

  useEffect(() => {
    dispatch(fetchClientStore());
  }, [dispatch]);

  useEffect(() => {
    if (storeState.data) {
      setStoreData(storeState.data);
    }
  }, [storeState.data]);

  if (!storeData || storeData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex items-center px-4 py-2 bg-slate-100">
        <span className="text-md lg:text-xl ml-2">List Store:</span>
      </div>
      <main className="pt-1 pb-14 lg:pb-0">
        <StoreList store={storeData} />
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
