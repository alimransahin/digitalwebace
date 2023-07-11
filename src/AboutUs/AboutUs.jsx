import React from "react";

const AboutUs = () => {
  return (
    <div className="flex my-16">
      <div className="w-1/2">
        <img
          className="h-96 mx-auto"
          src="https://www.pngkit.com/png/detail/443-4435657_logo-for-about-us.png"
          alt=""
        />
      </div>
      <div className="w-1/2 my-auto ">
        <div className="title text-center text-2xl font-bold text-blue-500 py-3">
          About Us
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure at
          nesciunt modi ipsa vel obcaecati, doloribus tenetur mollitia autem
          nihil eius aspernatur atque recusandae distinctio molestias officia
          adipisci inventore tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat culpa quidem ex esse consequatur assumenda
          quo commodi! Voluptatum dolor eius quibusdam dicta, quo magni,
          possimus consequuntur, suscipit officia nesciunt id?
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
