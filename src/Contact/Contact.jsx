const Contact = () => {
return (
<div className=" bg-white flex flex-col gap-8">
    <div className="h-[350px] contactImg flex flex-col justify-center items-center gap-5 text-white cabin relative">
        <div className="absolute left-0 top-0  w-full h-full bg-gradient from-green-400 bg-gradient-to-r"></div>
       <span className="relative z-10 w-full flex flex-col justify-center items-center gap-5 text-white cabin">
       <h1 className="text-5xl text-white text-bold tracking-wider">Contact Us</h1>
        <p className="text-lg text-center font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quos impedit aliquid <br /> voluptas officiis voluptatum?</p>
       </span>
    </div>
    <div className="flex mx-auto p-5 relative rounded-lg z-20 -mt-32 h-[500px] w-5/6 bg-white justify-between items-center drop-shadow-lg">
        <aside className="flex flex-col">
    <div>
    <img src="https://img.freepik.com/premium-vector/technical-support-icon-made-with-binary-code-customer-help-online-tech-support-customer-service-business-technology-concept-digital-matrix-background-with-digits-1-0-vector-illustration_127544-1853.jpg?w=996" className="w-32 h-32" alt="" />
    
    </div>
        </aside>
        <form className="">
            <input type="text" placeholder="Hello" />
        </form>
    </div>
</div>
);
};
export default Contact;