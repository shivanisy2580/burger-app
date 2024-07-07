import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">
        Burger Made With <br />
       <span className="text-red-600">Love</span>  And<span className="text-green-600"> Care </span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
        {/* 1st card */}
        <div>
          <div className="p-6 bg-white  hover:bg-gray-300  rounded-lg transition-all duration-200">
            <Image src={Img1} alt="Img1" className="rounded-3xl " />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolor perspiciatis alias cumque fugiat ducimus cum aliquam! Sed,
              animi voluptate.
            </p>
          </div>
        </div>
        {/* 2nd card */}
        <div>
          <div className="p-6 bg-white  hover:bg-gray-300 rounded-lg transition-all duration-200 lg:translate-y-[3rem]">
            <Image src={Img2} alt="Img2" className="rounded-3xl " />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
             Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolor perspiciatis alias cumque fugiat ducimus cum aliquam! Sed,
              animi voluptate.
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div>
          <div className="p-6  bg-white  hover:bg-gray-300  rounded-lg transition-all duration-200">
            <Image src={Img3} alt="Img3" className="rounded-3xl " />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chicken Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolor perspiciatis alias cumque fugiat ducimus cum aliquam! Sed,
              animi voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
