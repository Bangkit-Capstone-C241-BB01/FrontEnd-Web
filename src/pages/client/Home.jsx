import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import CategoryList from "../../components/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../../redux/features/profile/profileThunks";
import { BiSolidUser } from "react-icons/bi";

const Home = () => {
  let slides = [{ url: Banner1 }, { url: Banner2 }, { url: Banner3 }];
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

  let userAvatar;
  if (profileData.user_img) {
    userAvatar = <img src={profileData.user_img} alt="User Avatar" className="w-8 h-8 lg:w-11 lg:h-11 rounded-full mr-3" />;
  } else {
    userAvatar = (
      <div className="w-8 h-8 mr-2 rounded-full border border-black flex justify-center items-center">
        <BiSolidUser size={20} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex items-center px-4 py-2 bg-slate-100">
        {profileState.profileLoading ? (
          <span>Loading...</span>
        ) : profileState.profileError ? (
          <span>Error: {profileState.profileError}</span>
        ) : (
          <>
            {userAvatar}
            <span className="text-md lg:text-xl">
              Welcome, <span className="font-bold text-secondary"> {profileData.user_name}</span>
            </span>
          </>
        )}
      </div>
      <main className="pt-1 pb-14 lg:pb-0">
        <Carousel slides={slides} />
        {/* <CategoryList /> */}
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
