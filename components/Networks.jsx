import React, { useState } from "react";

const Networks = ({ setActiveNetwork, activeNetwork }) => {
  const networks = [
    {
      name: "Ethereum",
      rpcUrl: "https://rpc.ankr.com/eth",
      logo: "assets/images/ethereum.png",
    },
    {
      name: "Polygon Mumbai",
      rpcUrl:
        "https://polygon-mumbai.g.alchemy.com/v2/M_Vs3I53rHZDrLMQUVQ-DMqA1HsyuB_w",
      logo: "assets/images/polygon.png",
    },
    {
      name: "Polygon",
      rpcUrl:
        "https://polygon-mainnet.g.alchemy.com/v2/H4axRfn6TnB-5M5OBx15U8l7GOyilRHA",
      logo: "assets/images/polygon.png",
    },

    {
      name: "Goerli",
      rpcUrl:
        "https://eth-goerli.g.alchemy.com/v2/mDxN3aPokAVsTX-aCRdi5LyXRgLM7uS1",
      logo: "assets/images/ethereum.png",
    },
    {
      name: "Sepolia",
      rpcUrl:
        "https://eth-sepolia.g.alchemy.com/v2/QHdv_fclCoISCunwlmLiVkqnkSx_UyS7",
      logo: "assets/images/ethereum.png",
    },
  ];

  const selectNetwork = (network) => {
    setActiveNetwork(network.name);
    localStorage.setItem("activeNetwork", JSON.stringify(network));
  };
  return (
    <section id="generator" class="py-14">
      <div class="container z-10">
        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-20 ">
          {networks?.map((network, index) => (
            <div onClick={() => selectNetwork(network)}>
              <div
                class={`group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40 ${
                  activeNetwork == network.name ? "bg-primary/40" : ""
                }`}
              >
                <div class="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
                  <img src={network.logo} class="h-10" alt="WebAi Logo" />
                </div>
                <h3 class="text-xl font-medium text-default-200 mt-8">
                  {network.name}
                </h3>
                <p class="text-base font-normal text-default-300 mt-4">
                  By utilizing the selected network{" "}
                  <strong>{network.name}</strong>, you can able to find and get
                  access of the details for getting the pool address and
                  liqudity
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
