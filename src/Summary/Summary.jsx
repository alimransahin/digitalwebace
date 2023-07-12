import React from "react";

const Summary = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat px-10 py-16 text-blue-600 grid sm:grid-cols-2 md:grid-cols-4 text-center gap-4">
      <div className="time duration-1000 hover:bg-blue-600 hover:text-white py-8 rounded-lg">
        <h1 className="text-4xl font-bold">1500+</h1>
        <p className="">Days Worked</p>
      </div>
      <div className="projects duration-1000 hover:bg-blue-600 hover:text-white py-8 rounded-lg">
        <h1 className="text-4xl font-bold">500+</h1>
        <p className="">Project Finished</p>
      </div>
      <div className="employees duration-1000 hover:bg-blue-600 hover:text-white py-8 rounded-lg">
        <h1 className="text-4xl font-bold">700+</h1>
        <p className="">Dedicated Employees</p>
      </div>
      <div className="clients duration-1000 hover:bg-blue-600 hover:text-white py-8 rounded-lg">
        <h1 className="text-4xl font-bold">400+</h1>
        <p className="">Happy Clients</p>
      </div>
    </div>
  );
};

export default Summary;
