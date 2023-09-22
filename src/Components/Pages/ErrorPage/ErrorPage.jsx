import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <h1 className="text-5xl font-bold text-sky-600">Oops!!!!</h1>
          <NavLink to="/"><button className="bg-sky-600 text-white px-3 py-2 rounded-lg font-semibold mt-5">Go Back Home</button></NavLink>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
