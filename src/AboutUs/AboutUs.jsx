 
import stroke from '../assets/stroke.png'
const AboutUs = () => {
  return (
    <div className="sm:flex py-16 bg-[#F6F6F6]" id="about">
      <div className="sm:w-1/2" data-aos="fade-right">
        <img
          className="h-96 mx-auto"
          src="https://www.pngkit.com/png/detail/443-4435657_logo-for-about-us.png"
          alt=""
        />
      </div>
      <div className="sm:w-1/2 my-auto p-8">
        <div className="text-3xl cabin tracking-wider font-bold text-blue-500 py-3">
          About Us
        </div>
        <img src={stroke} className='w-1/4 mb-5' alt="" />
        <p className="text-gray-600 tracking-wider"  data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at
          nesciunt modi ipsa vel obcaecati, doloribus tenetur mollitia autem
          nihil eius aspernatur atque recusandae distinctio molestias officia
          adipisci inventore tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat culpa quidem ex esse consequatur assumenda
          quo commodi! Voluptatum dolor eius quibusdam dicta, quo magni,
          possimus consequuntur, suscipit officia nesciunt id?
        </p>
        <div className="flex flex-col mt-5 w-3/4">
          <h3 className="font-bold text-slate-900 cabin text-2xl">Nur Mohammad Chowdhury</h3>
          <p className="text-xl tracking-widest font-thin text-gray-700">Junior web developer.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
