import AboutUs from "../../AboutUs/AboutUs";
import Choose from "../../Choose/Choose";
import Services from "../../Services/Services";
import Banner1 from "../../Shared/Banners/Banner1/Banner1";
import Banner2 from "../../Shared/Banners/Banner2/Banner2";
import Summary from "../../Summary/Summary";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Banner1 />
      <Choose />
      <Banner2 />
      <Summary />
    </div>
  );
};
export default Home;