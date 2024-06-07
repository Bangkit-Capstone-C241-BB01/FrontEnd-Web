import Header from "../../components/Header";
import Nav from "../../components/Nav";
import BoxProductContainer from "../../components/BoxProductContainer";

const Product = () => {
  return (
    <>
      <Header role="seller" />
      <div className="flex">
        <Nav role="seller" />
        <BoxProductContainer />
      </div>
    </>
  );
};

export default Product;
