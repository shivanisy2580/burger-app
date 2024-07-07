import Image from "next/image";
import DeliveryImg from "@/public/images/delivery.svg"
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

export default function Delivery() {
    return (
      <div className="pt-[8rem] pd-[3rem] ">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
          {/* image */}
          <div>
            <Image src={DeliveryImg} alt="Delivery_Image" />
          </div>
          {/* Text content */}
          <div>
            <h1 className="heading">
              Your <span className="text-orange-600">Favorite Burger</span> On
              The Way
            </h1>
            <p className="mt-[2rem] text-black text-[17px] text-opacity-70 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              recusandae dolorum provident quo, nemo, doloribus perspiciatis
              corporis possimus ipsum laudantium at veniam odio et! Ad eveniet
              doloribus consequuntur veniam beatae?
            </p>
            <div className="flex items-center space-x-3 mt-[2rem] ">
              <RiEBike2Fill className="w-[2rem] h-[2rem] text-orange-600 " />
              <h1 className="text-[18px] text-black font-medium ">
                {" "}
                Delivery In 30 Minutes
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] ">
              <IoFastFood className="w-[2rem] h-[2rem] text-orange-600 " />
              <h1 className="text-[18px] text-black font-medium ">
                {" "}
               Free Shipping From 75$
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] ">
              < BsDoorOpen className="w-[2rem] h-[2rem] text-orange-600 " />
              <h1 className="text-[18px] text-black font-medium ">
                {" "}
                Delivery On Your Doorstep
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}