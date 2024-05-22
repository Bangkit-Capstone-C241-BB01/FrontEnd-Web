import BoxProduct from "../../components/BoxProduct";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

const Product = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Nav />
        <div className="ml-4 lg:ml-72 mt-5 flex gap-9 w-full flex-wrap">
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
        </div>
      </div>
    </>
  );
};

export default Product;
