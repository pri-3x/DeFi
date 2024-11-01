import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
//INTERNAL IMPORT
import { IconOne, IconTwo } from "./index";

const Promo = ({ setActiveComponent }) => {
  return (
    <section class="relative overflow-hidden pt-[72px] bg-default-950/40 backdrop-blur-3xl">
      <div class="absolute h-14 w-14 bg-primary/10 top-2/3 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
      <div class="absolute h-14 w-14 bg-primary/20 top-2/3 end-80 -z-1 rounded-full animate-ping"></div>

      <div class="px-6 pt-20 overflow-hidden">
        <div class="relative">
          <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-default-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <IconOne />
            <IconTwo />
          </div>

          <div class="container">
            <div class="py-14 text-center relative">
              <div class="flex justify-center">
                <div class="max-w-2xl">
                  <h2 class="md:text-6xl/tight text-5xl text-default-100 font-semibold mb-6">
                    Sorry, currently you have no pool data
                  </h2>
                  <p class="text-base text-default-200 font-medium px-5">
                    Uniswap pools address finder for blockchain trade, we have
                    collections of web3 tools which allow you to find any
                    network pools liqudity and address.
                  </p>

                  <div class="flex flex-wrap items-center justify-center gap-6 mt-10">
                    <a
                      onClick={() => setActiveComponent("Home")}
                      class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                      Get Pool Address
                      <FaArrowRightLong />
                    </a>

                    <a
                      onClick={() => setActiveComponent("Liqudity")}
                      class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                      Liqudity
                      <FaArrowRightLong />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
