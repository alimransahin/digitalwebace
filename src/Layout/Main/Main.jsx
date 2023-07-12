import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import AOS from 'aos';
import loading from '../../assets/loading2.gif'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
// ..
AOS.init();

const Main = () => {
    const [showGif, setShowGif] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setShowGif(false);
      }, 1800); // change this value to set the duration of the GIF display
    }, []);
    if(showGif) return <div className="flex w-screen h-screen justify-center items-center">
    <img className="object-cover h-screen md:w-screen" src={loading} alt="Loading..." />
      </div>
return (
<div className="max-w-7xl mx-auto relative">
<Navbar/>
<div className="min-h-screen">
<Outlet/>
</div>
<Footer/>
 </div>

);
};
export default Main;