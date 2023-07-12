import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Choose = () => {
  return (
    <div className="sm:flex sm:flex-row-reverse py-16 bg-white">
      <div className="sm:w-1/2 flex justify-center items-center">
        <ScrollAnimation animateIn="bounceIn">
          <img
            className=" mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1ljUeKpZTyTwybnJdUShLC0EOF3TjHd86w&usqp=CAU"
            alt=""
          />
        </ScrollAnimation>
      </div>
      <div className="sm:w-1/2 my-auto p-8 ">
        <ScrollAnimation animateIn="flipInX">
          <div className="title text-center text-2xl font-bold text-blue-500 py-3">
            Why Choose Us?
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at
            nesciunt modi ipsa vel obcaecati, doloribus tenetur mollitia autem
            nihil eius aspernatur atque recusandae distinctio molestias officia
            adipisci inventore tempore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat culpa quidem ex esse consequatur
            assumenda quo commodi! Voluptatum dolor eius quibusdam dicta, quo
            magni, possimus consequuntur, suscipit officia nesciunt id?
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Choose;
