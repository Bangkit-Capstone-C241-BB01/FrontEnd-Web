import Header from "../../components/Header";
import Nav from "../../components/Nav";
import AppealTableSeller from "../../components/AppealTableSeller";

const AppealHistorySeller = () => {
  return (
    <>
      <Header role="seller" />
      <div className="flex font-roboto">
        <Nav role="seller" />
        <div className="ml-0 lg:ml-64 px-4 w-full">
          <AppealTableSeller />
        </div>
      </div>
    </>
  );
};

export default AppealHistorySeller;
