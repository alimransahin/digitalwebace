import AboutUs from "../../AboutUs/AboutUs";
import Services from "../../Services/Services";
import Banner1 from "../../Shared/Banners/Banner1/Banner1";
import Banner2 from "../../Shared/Banners/Banner2/Banner2";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Banner1 />
      <Banner2 />
    </div>
  );
};
export default Home;
