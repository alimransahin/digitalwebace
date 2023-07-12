 
// import ScrollAnimation from "react-animate-on-scroll";
import stroke from '../assets/stroke.png'
const Choose = () => {
  return (
    <div className="sm:flex sm:flex-row-reverse py-16 bg-white bg-[url('https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat" >
      <div className="sm:w-1/2 flex justify-center items-center" data-aos="zoom-in" data-duration="2000">
        {/* <ScrollAnimation animateIn="bounceIn"> */}
          <img
            className=" mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1ljUeKpZTyTwybnJdUShLC0EOF3TjHd86w&usqp=CAU"
            alt=""
          />
        {/* </ScrollAnimation> */}
      </div>
      <div className="sm:w-1/2 my-auto p-8 " data-aos="zoom-in" data-duration="2000">
        {/* <ScrollAnimation animateIn="flipInX"> */}
        <div className="text-3xl cabin tracking-wider font-bold text-blue-500 py-3">
        Why Choose Us ?
        </div>
          <img src={stroke} className='w-2/4 mb-5' alt="" />

          <p className="text-gray-600 tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at
            nesciunt modi ipsa vel obcaecati, doloribus tenetur mollitia autem
            nihil eius aspernatur atque recusandae distinctio molestias officia
            adipisci inventore tempore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat culpa quidem ex esse consequatur
            assumenda quo commodi! Voluptatum dolor eius quibusdam dicta, quo
            magni, possimus consequuntur, suscipit officia nesciunt id?
          </p>
        {/* </ScrollAnimation> */}
      </div>
    </div>
  );
};

export default Choose;
