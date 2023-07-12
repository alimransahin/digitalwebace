 
// import ScrollAnimation from "react-animate-on-scroll";

import { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner2 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-no-repeat bg-fixed h-[50vh] xl:h-[30vh]">
      <div
        className="w-full h-full flex flex-col md:flex-row  justify-between items-center 
             bg-blue-600/30 backdrop-brightness-50 px-10 py-8"
      >
        {/* <ScrollAnimation animateIn="fadeInLeftBig"> */}
        <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="L61p2uyiMSo"
				onClose={() => setOpen(false)} 
			/>
      <button className="btn-primary ml-20" onClick={() => setOpen(true)}>
      <animateMotion className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">View Demo</span>
</animateMotion>
      </button>
        {/* </ScrollAnimation> */}
        <div className="flex flex-col justify-center md:w-1/2 p-2">
          {/* <ScrollAnimation animateIn="fadeInRightBig"> */}
            <h2 className="text-white text-2xl font-medium text-right pb-4">
              Here is an example of colored overlay on an image
            </h2>
            <p className="text-white text-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos neque at eaque dolor suscipit unde dolores a numquam
              cum voluptate nesciunt animi non, ducimus culpa, temporibus
              explicabo porro minus illum!
            </p>
          {/* </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
