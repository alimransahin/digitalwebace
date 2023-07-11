import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
// import './react-phone-number-input/style.css'
const Contact = () => {
    const [value, setValue] = useState()

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7rpbmx', 'template_p0kbta2', {...form, value: value}.current, 'iO3UtMwx_ea2BEoW3')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

return (
<div className=" bg-white flex flex-col gap-8">
    <div className="min-h-[350px] contactImg flex flex-col justify-center items-center gap-5 text-white cabin relative">
        <div className="absolute left-0 top-0  w-full h-full bg-gradient from-[#EBD8B2] bg-gradient-to-r"></div>
       <span className="relative z-10 w-full flex flex-col justify-center items-center gap-5 text-white cabin">
       <h1 className="text-5xl text-white text-bold tracking-wider">Contact Us</h1>
        <p className="text-lg text-center font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quos impedit aliquid <br /> voluptas officiis voluptatum?</p>
       </span>
    </div>
    <div className="flex mx-auto p-5 relative rounded-lg z-20 -mt-32 h-5/6 w-5/6 bg-white justify-between items-center drop-shadow-lg">
        <aside className="flex flex-col gap-5 w-1/2 h-full ">
    <div className="flex gap-3 justify-center items-center">
    <img src="https://mdinfotechbd.com/assets/images/3d00879.webp" className="w-32 h-32" alt="" />
    <span className="border-l-4 border-[#654E92] pl-2">
        <h4 className="text-md cabin tracking-wider text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, qui.
        </h4>
    </span>
    </div>
    <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-[#654E92]">Email:</p>
        <p className="text-lg text-gray-700 tracking-wide">digitalwebace@gmail.com</p>
    </div>
    <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-[#654E92]">Phone:</p>
        <p className="text-lg text-gray-700 tracking-wide">+880123654789</p>
    </div>
    <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-[#654E92]">Location:</p>
        <p className="text-lg text-gray-700 tracking-wide">Mirpur 10 bridge er tolay.</p>
    </div>
    <div className="flex flex-wrap gap-4 mt-5">
        <button className="bg-blue-500 font-semibold text-white rounded-md px-4 py-2">Facebook</button>
        <button className="bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 font-semibold text-white rounded-md px-4 py-2">Instragram</button>
        <button className="bg-blue-900 font-semibold text-white rounded-md px-4 py-2">LinkedIn</button>
    </div>
        </aside>
        <form ref={form} onSubmit={sendEmail} className="w-3/4 flex flex-col gap-5 min-h-[450px] border border-t-4 border-[#654E92] rounded-xl p-5">
          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Your name: <sup className="text-red-600">*</sup></p>
          <input name='user_name' type="text" className="w-full rounded-md px-3 py-2 border border-gray-400 bg-transparent" />
          </span>

          <div className="flex gap-3 justify-center items-center">
          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Your email: <sup className="text-red-600">*</sup></p>
          <input name='user_email' type="text" className=" rounded-md px-3 py-2 border border-gray-400 bg-transparent" />
          </span>
          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Your phone number: <sup className="text-red-600">*</sup></p>
          <PhoneInput
          className=" rounded-md px-3 py-2 border border-gray-400 bg-transparent"
  international
  defaultCountry="US"
  onChange={setValue}/>
          </span>
          </div>

          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Your Whatsapp number <span className="text-[#6C9BCF] text-sm">(for quick contact.)</span> :</p>
          <input name='user_wp_number' type="text" className="w-full rounded-md px-3 py-2 border border-gray-400 bg-transparent" />
          </span>
          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Select a topic: <sup className="text-red-600">*</sup></p>
          <input name='user_topic' type="text" className="w-full rounded-md px-3 py-2 border border-gray-400 bg-transparent" />
          </span>
          <span className="flex-flex-col gap-4 w-full">
          <p className="text-lg font-semibold text-gray-800 mb-2">Message: </p>
          <textarea name='details' rows={7} type="text" className="w-full rounded-md px-3 py-2 border border-gray-400 bg-transparent" />
          </span>
          <button type="submit" className="bg-[#654E92] font-semibold text-white rounded-md px-4 py-2">Send</button>
        </form>
    </div>
</div>
);
};
export default Contact;