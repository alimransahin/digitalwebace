import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/uiux.png";
import img4 from "../assets/webdev.png";
import stroke from "../assets/stroke.png";
// import ScrollAnimation from "react-animate-on-scroll";
const Services = () => {
  const services = [
    {
      id: 2,
      title: "Web design",
      img: img2,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 3,
      title: "Web design",
      img: img3,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 4,
      title: "Web design",
      img: img4,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 1,
      title: "Web design",
      img: img1,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 3,
      title: "Web design",
      img: img3,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 2,
      title: "Web design",
      img: img2,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 4,
      title: "Web design",
      img: img4,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 2,
      title: "Web design",
      img: img2,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 3,
      title: "Web design",
      img: img3,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 1,
      title: "Web design",
      img: img1,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 3,
      title: "Web design",
      img: img3,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
    {
      id: 4,
      title: "Web design",
      img: img4,
      description:
        "Digital web ace is a cutting-edge IT business. It offers a wide range of IT services and products on a local and global level. ",
    },
  ];
  return (
    <div className=" px-10 py-16 ">
      <div className="text-3xl cabin text-center tracking-wider font-bold text-blue-500 py-3">
        Services
      </div>
      <img src={stroke} className="w-32 mb-5 mx-auto" alt="" />
      <div className="services grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
        {services.map((service) => (
          <div key={service.id} data-aos="zoom-in">
            <div className="card shadow-lg bg-gray-100 p-2 rounded-xl hover:scale-105 duration-300 flex flex-col justify-center items-center gap-3 py-5">
              <div className="">
                <img
                  className="inline-block w-24"
                  src={service.img}
                  alt="ui/ux"
                />
              </div>

              <div className="card-title text-blue-400 text-center font-medium text-lg">
                <span>{service.title}</span>
              </div>
              <div className="card-body text-center px-10">
                <p className="text-gray-600 tracking-wide">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* </ScrollAnimation> */}
      </div>
    </div>
  );
};

export default Services;
