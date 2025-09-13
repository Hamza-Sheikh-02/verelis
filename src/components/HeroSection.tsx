import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
        <div className="bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              NEW ARRIVALS.
              <br />
              FRESH LOOKS.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
              Discover timeless essentials designed to elevate your everyday.
            </p>
            <Button className="text-lg px-8 py-3 sm:px-10 sm:py-4 bg-[#200B3D] text-white hover:bg-[#3b2a5e]">
              Shop Now
            </Button>
          </div>
          <div className="relative flex justify-center items-center h-full mt-10 lg:mt-0">
            <Image
              src="/images/hero1.png"
              alt="Model 1"
              width={400}
              height={600}
              className="relative z-10 -mr-16 sm:-mr-24 lg:-mr-32 w-[250px] h-[375px] sm:w-[300px] sm:h-[450px] lg:w-[350px] lg:h-[525px] object-cover rounded-lg shadow-lg"
            />
            <Image
              src="/images/hero2.png"
              alt="Model 2"
              width={400}
              height={600}
              className="relative z-20 w-[250px] h-[375px] sm:w-[300px] sm:h-[450px] lg:w-[350px] lg:h-[525px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
