const Navbar = () => {
return (
<div>
<nav className="px-10 h-[10vh] navbg flex justify-center items-center rounded">
  <div className="container flex flex-wrap justify-between items-center cabin mx-auto">
    <a href="#intro" className="flex">
      <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg>
        <span className="self-center text-lg font-semibold whitespace-nowrap ">DigitalWebAce</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:border-b-2 border-blue-700" aria-controls="mobile-menu-2" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
          <a href="#home" className="block py-2 pr-4 pl-3 text-black border-b  md:border-0 md:hover:text-blue-700 md:p-0 hover:border-b-2 border-blue-700 hover:text-white">Home</a>
        </li>
        <li>
          <a href="#about" className="block py-2 pr-4 pl-3 text-black border-b  md:border-0 md:hover:text-blue-700 md:p-0 hover:border-b-2 border-blue-700 hover:text-white">About</a>
        </li>
        <li>
          <a href="#services" className="block py-2 pr-4 pl-3 text-black border-b  md:border-0 md:hover:text-blue-700 md:p-0 hover:border-b-2 border-blue-700 hover:text-white">Services</a>
        </li>
        <li>
          <a href="#testimonials" className="block py-2 pr-4 pl-3 text-black border-b  md:border-0 md:hover:text-blue-700 md:p-0 hover:border-b-2 border-blue-700 hover:text-white">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="block py-2 pr-4 pl-3 text-black md:border-0 md:hover:text-blue-700 md:p-0 hover:border-b-2 border-blue-700 hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
};
export default Navbar;