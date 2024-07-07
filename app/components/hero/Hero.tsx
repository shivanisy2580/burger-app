"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import burgurImg1 from "@/public/images/b1.png";
import burgurImg2 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* 1st hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid grid-col-1 md:grid-cols-2 justify-center items-center gap-[2rem] max-auto ">
          <Image
            src={burgurImg1}
            alt="burgurimg1"
            className="hidden md:block"
          />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Fast Food Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best <br /> Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-75 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur quam maiores autem laborum quasi fuga soluta veritatis
              quod. Vero sint quod saepe inventore fugit.
            </p>
            <button className="px-8  mt-[2rem] py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className=" h-[1.7rem] w-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2nd hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-col-1 md:grid-cols-2 justify-center items-center gap-[2rem] max-auto ">
          <Image
            src={burgurImg2}
            alt="burgurimg2"
            className="hidden md:block "
          />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Tasty Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top <br /> Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-75 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur quam maiores autem laborum quasi fuga soluta veritatis
              quod. Vero sint quod saepe inventore fugit.
            </p>
            <button className="px-8  mt-[2rem] py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className=" h-[1.7rem] w-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
