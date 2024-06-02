import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import CategoryList from "../../components/CategoryList";
import { user } from "../../components/Header.jsx";
const Home = () => {
  let slides = [{ url: Banner1 }, { url: Banner2 }, { url: Banner3 }];
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <SearchBar />
      <div className="flex items-center px-4 py-2 bg-slate-100">
        <img src={user.avatar} alt="User Avatar" className="w-8 h-8 lg:w-11 lg:h-11 rounded-full mr-3" />
        <span className="text-md lg:text-xl">
          Welcome, <span className="font-bold text-secondary"> John Doe</span>
        </span>
      </div>
      <main className="pt-1 pb-14 lg:pb-0">
        <Carousel slides={slides} />
        <CategoryList />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
