import { FaFacebook } from "react-icons/fa";
import { FaBurger, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        {/* 1st part */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[3rem] sm:h-[3rem] text-orange-700" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BurgerBite
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic
            magni quaerat .
          </p>
          <p className="mt-[1rem] text-white">support@example.com</p>
          <p className="text-yellow-500 text-[19px] font-bold">
            +(91) 74886 32484
          </p>
        </div>
        {/* 2nd Part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Products
          </h1>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Beef Burger
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Chicken Burger
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Crispy Burger
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Delight Burger
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Classic Burger
          </p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Links
          </h1>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Home
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            About
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Menu
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Products
          </p>
          <p className="mt-[0.5rem] text-white opacity-60 hover:text-yellow-500 transition-all duration-200 cursor-pointer w-fit ">
            Newsletter
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Opening Hours
            <p className="text-white text=[18px] ">
              Monday - Friday :{" "}
              <span className="text-yellow-400">8AM - 8PM</span>
            </p>
            <p className="text-white text=[18px]">
              Saturday : <span className="text-yellow-400">8AM - 12PM</span>
            </p>
            {/* Social icons */}
            <div className="flex mt-[2rem] items-center space-x-6">
              <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400 " />
              <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400 " />
              <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
              <FaYoutube className="w-[1.5rem] h-[1.5rem] text-red-500 " />
            </div>
          </h1>
        </div>
      </div>
      {/* Copyright text  */}
      <p className="text-center text-white opacity-50 mt-[1.5rem]">
        Copyright @ 2024 <span className="text-red-500"> Tech Sollution</span>.
        All Rights Reserved
      </p>
    </div>
  );
}
