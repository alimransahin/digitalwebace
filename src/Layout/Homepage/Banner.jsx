const Banner = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/wavy-shape-business-background-paper-cut-style_1017-33399.jpg?w=996&t=st=1688910107~exp=1688910707~hmac=652475589fe29a187ddec29b414e9664c0907311ce8a44a85a8b9323a9a2302b')] cabin px-10 md:flex justify-center items-center bg-cover bg-no-repeat p-10">
      <aside className="md:w-1/2 mt-10">
        <h1 className="text-xl font-semibold tracking-wide">
          Empower Your Workforce with EliteHire:
        </h1>
        <p className="text-6xl bg-gradient-to-tl from-blue-700 to-[#EBD8B2] bg-clip-text text-transparent  leading-tight tracking-wide text-left font-bold">
          {" "}
          The Ultimate Digital Solution for All !
        </p>
        <div className="mt-10 p-6 cabin">
          <a
            href="#_"
            className="relative px-6 py-3 font-bold text-white rounded-lg group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#6C9BCF] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#654E92] ease opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-multiply"></span>
            <span className="relative">Hire Us !</span>
          </a>
        </div>
      </aside>
      <aside className="md:w-1/2 h-full">
        <img
          src="https://www.glermediapro.com/wp-content/uploads/2020/07/digital-solutions.jpg"
          alt=""
          className="mx-auto object-contain opacity-75	"
        />
      </aside>
    </div>
  );
};
export default Banner;
