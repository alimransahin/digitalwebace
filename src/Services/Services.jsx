import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat px-10 py-8 ">
      <div className="title text-center text-2xl font-bold text-blue-500">
        Our Services
      </div>
      <div className="services">
        <div className="card">
          <div className="img"></div>
          <div className="card-title"></div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
