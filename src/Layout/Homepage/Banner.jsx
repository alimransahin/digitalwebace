import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
   
    return (

<div className="bg-[url('https://img.freepik.com/free-vector/wavy-shape-business-background-paper-cut-style_1017-33399.jpg?w=996&t=st=1688910107~exp=1688910707~hmac=652475589fe29a187ddec29b414e9664c0907311ce8a44a85a8b9323a9a2302b')] cabin px-10 bg-cover bg-no-repeat min-h-[90vh]">
      <Carousel className='pt-8 py-10' autoPlay={true} interval={1800} infiniteLoop={true} showThumbs={true} swipeable={true} emulateTouch={false}>
   
   <div className='flex flex-col gap-3 md:flex-row py-10 '>
                
                <aside className="w-full md:w-1/2 h-full flex-start flex flex-col">
   <h1 className="text-xl text-left font-semibold tracking-wide">
   Empower Your Workforce with EliteHire: 
   </h1>
   <p className="text-6xl bg-gradient-to-tl from-blue-700 to-[#EBD8B2] bg-clip-text text-transparent  leading-tight tracking-wide text-left font-bold"> The Ultimate Digital Solution for All !</p>
   <div className='mt-5 cabin'>
   <a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#6C9BCF] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#654E92] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-multiply"></span>
<span className="relative">Hire Us !</span>
</a>
   </div>
   </aside>
   <aside className=' w-1/2 h-full mx-auto hidden md:block'>
                    <img className='rounded-xl w-32 h-96' alt='' src='https://img.freepik.com/premium-vector/painter-cartoon-character_88465-1949.jpg?w=740 ' />
                </aside>
            </div>
   <div className='flex flex-col gap-3 md:flex-row py-10 '>
                
                <aside className="w-full md:w-1/2 h-full flex-start flex flex-col">
   <h1 className="text-xl text-left font-semibold tracking-wide">
   Empower Your Workforce with EliteHire: 
   </h1>
   <p className="text-6xl bg-gradient-to-tl from-blue-700 to-[#EBD8B2] bg-clip-text text-transparent  leading-tight tracking-wide text-left font-bold"> The Ultimate Digital Solution for All !</p>
   <div className='mt-5 cabin'>
   <a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#6C9BCF] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#654E92] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-multiply"></span>
<span className="relative">Hire Us !</span>
</a>
   </div>
   </aside>
   <aside className=' w-1/2 h-full mx-auto hidden md:block'>
                    <img className='rounded-xl w-32 h-96' alt='' src='https://img.freepik.com/premium-vector/painter-cartoon-character_88465-1949.jpg?w=740 ' />
                </aside>
            </div>
   <div className='flex flex-col gap-3 md:flex-row py-10 '>
                
                <aside className="w-full md:w-1/2 h-full flex-start flex flex-col">
   <h1 className="text-xl text-left font-semibold tracking-wide">
   Empower Your Workforce with EliteHire: 
   </h1>
   <p className="text-6xl bg-gradient-to-tl from-blue-700 to-[#EBD8B2] bg-clip-text text-transparent  leading-tight tracking-wide text-left font-bold"> The Ultimate Digital Solution for All !</p>
   <div className='mt-5 cabin'>
   <a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#6C9BCF] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#654E92] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-multiply"></span>
<span className="relative">Hire Us !</span>
</a>
   </div>
   </aside>
   <aside className=' w-1/2 h-full mx-auto hidden md:block'>
                    <img className='rounded-xl w-32 h-96' alt='' src='https://img.freepik.com/premium-vector/painter-cartoon-character_88465-1949.jpg?w=740 ' />
                </aside>
            </div>
            
 

      </Carousel>
</div>
);
};
export default Banner;