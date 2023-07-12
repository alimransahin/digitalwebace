import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-cover bg-no-repeat ">
      <div
        class="w-full h-full flex flex-col md:flex-row  justify-center items-center 
             bg-blue-600/30 backdrop-brightness-50 px-10 py-8"
      >
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/lBfshkPlMW8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <div className="info md:w-1/2 p-2">
          <h2 class="text-white text-2xl font-medium text-center pb-4">
            Here is an example of colored overlay on an image
          </h2>
          <p className="text-white text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos neque at eaque dolor suscipit unde dolores a numquam cum
            voluptate nesciunt animi non, ducimus culpa, temporibus explicabo
            porro minus illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
