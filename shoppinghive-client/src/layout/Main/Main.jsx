import { Outlet } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import Footer from "../../components/shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
