 
import "./Services.css";
import img1 from '../assets/service1.png'
import img2 from '../assets/service2.png'
import img3 from '../assets/uiux.png'
import img4 from '../assets/webdev.png'
import stroke from '../assets/stroke.png'
// import ScrollAnimation from "react-animate-on-scroll";
const Services = () => {
  const services = [
   
    {
      id: 2,
      img: img2,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 3,
      img: img3,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 4,
      img: img4,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 1,
      img: img1,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 3,
      img: img3,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 2,
      img: img2,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 4,
      img: img4,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 2,
      img: img2,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 3,
      img: img3,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 1,
      img: img1,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 3,
      img: img3,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
    {
      id: 4,
      img: img4,
      description: 'Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. '
    },
  ]
  return (
<<<<<<< HEAD
    <div className=" px-10 py-16 ">
     <div className="text-3xl cabin text-center tracking-wider font-bold text-blue-500 py-3">
        Services
        </div>
        <img src={stroke} className='w-32 mb-5 mx-auto' alt="" />
      <div className="services grid md:grid-cols-3 sm:grid-cols-2 gap-5 ">
      
          {
            services.map(service => <div key={service.id}  data-aos="zoom-in">
              <div className="card shadow-lg bg-gray-100 p-2 rounded-xl hover:scale-105 duration-300 flex flex-col justify-center items-center gap-3 py-5">
            <div className="">
              <img
                className="inline-block w-24"
                src={service.img}
                alt="ui/ux"
              />
            </div>

            <div className="card-title text-blue-400 text-center font-medium text-lg">
              WEB DESIGN
            </div>
            <div className="card-body text-center px-10">
             <p className="text-gray-600 tracking-wide">{service.description}</p>
            </div>
          </div>
            </div>)
          }
      
        {/* </ScrollAnimation> */}
=======
    <div className="bg-[url('https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat px-10 py-8 ">
      <div className="title text-center text-2xl font-bold text-blue-500 py-3">
        Our Services
      </div>
      <div className="services grid md:grid-cols-3 sm:grid-cols-2 gap-3">
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
        <div className="card bg-gray-100 p-2 rounded-xl">
          <div className="img text-center">
            <img
              className="inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQYKJ0sAZ-di6z4hZgr3nwiw9iVYBB-dgqUmhgcdrmh9tXSODmIlS8L5p2K5rosT1YkA&usqp=CAU"
              alt="ui/ux"
            />
          </div>
          <div className="card-title text-blue-400 text-center font-medium text-lg">
            WEB DESIGN
          </div>
          <div className="card-body text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            veritatis necessitatibus. Perspiciatis mollitia distinctio hic
            blanditiis quisquam culpa vitae sint!
          </div>
        </div>
>>>>>>> 0acf9e3c8be214332d154df7cdd9738ea5d7f21a
      </div>
    </div>
  );
};

export default Services;
