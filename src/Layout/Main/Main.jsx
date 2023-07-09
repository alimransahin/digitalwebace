import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () => {
return (
<div>
<Navbar/>
<div className="min-h-screen">
<Outlet/>
</div>
<Footer/>
 </div>

);
};
export default Main;