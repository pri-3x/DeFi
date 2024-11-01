import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import { IconOne, IconTwo } from "./index";

const Home = ({ GET_POOL_DETAILS, setActiveComponent }) => {
  const [selectedNetwork, setSelectedNetwork] = useState({});
  const [poolAddress, setPoolAddress] = useState();
  const [poolDetails, setPoolDetails] = useState();

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"));
    setSelectedNetwork(network);
  }, []);

  const CALL_POOL_DETAIL = async (inputAddress) => {
    const { rpcUrl } = selectedNetwork;

    const zeroAdd = "0x0000000000000000000000000000000000000000";

    if (!inputAddress || !rpcUrl || inputAddress == zeroAdd)
      return notifyError("Provide Data or Invalide address");
    const poolDetails = await GET_POOL_DETAILS(inputAddress, selectedNetwork);

    setPoolDetails(poolDetails);
  };
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
                    Uniswap pool & liquidity finder
                  </h2>
                  <p class="text-base text-default-200 font-medium px-5">
                    Uniswap pools address finder for blockchain trade, we have
                    collections of web3 tools which allow you to find any
                    network pools liqudity and address.
                  </p>
                  <div class="backdrop-blur-2xl bg-white/10 rounded-md max-w-xl mx-auto">
                    <div class="w-full flex items-center justify-between mt-7">
                      <input
                        type="text"
                        class="w-full p-4 border-0 focus:outline-none focus:ring-0 text-sm text-white placeholder:text-white bg-transparent"
                        placeholder="Enter Pool Address"
                        autocomplete="off"
                        onChange={(e) => setPoolAddress(e.target.value)}
                      />
                      <button class="py-2 px-6 me-2 border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500">
                        <div
                          onClick={() => CALL_POOL_DETAIL(poolAddress)}
                          class="flex items-center justify-center gap-1"
                        >
                          <span>Submit</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center justify-center gap-6 mt-10">
                    <a
                      onClick={() => setActiveComponent("Liqudity History")}
                      class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                      {poolDetails ? "Check Liqudity" : "Get Pool Liqudity "}
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
                  <p class="text-sm font-medium text-default-400 mt-5">
                    Get all details about pools and liqudity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
