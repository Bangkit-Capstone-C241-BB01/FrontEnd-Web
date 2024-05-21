import Header from "../../components/Header";
import Nav from "../../components/Nav";

const Product = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Nav />
        <div className="ml-0 lg:ml-64  mt-5">
          <h1 className="text-4xl">Main Content</h1>
        </div>
      </div>
    </>
  );
};

export default Product;
