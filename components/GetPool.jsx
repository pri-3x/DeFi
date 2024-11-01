import React, { useState, useEffect } from "react";
import { GoCopy } from "react-icons/go";
import toast from "react-hot-toast";

const GetPool = ({ GET_POOL_ADDRESS }) => {
  const [selectedNetwork, setSelectedNetwork] = useState({});
  const [poolAddress, setPoolAddress] = useState([]);

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"));
    setSelectedNetwork(network);
  }, []);

  const [liqudity, setLiqudity] = useState({
    token_A: "",
    token_B: "",
    fee: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setLiqudity({ ...liqudity, [fileName]: e.target.value });
  };

  const CALL_POOL_ADDRESS = async () => {
    const { token_A, token_B, fee } = liqudity;
    const { rpcUrl } = selectedNetwork;

    if (!token_A || !token_B || !fee || !rpcUrl)
      return notifyError("Provide all the details");

    const poolAddress = await GET_POOL_ADDRESS(liqudity, selectedNetwork);
    setPoolAddress(poolAddress);
  };

  return (
    <section class="flex items-center py-6 px-0 lg:p-10 w-full lg:h-screen">
      <div class="container">
        <div class="backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-10">
            <div class="hidden lg:block ps-4 py-4">
              <div class="relative rounded-xl overflow-hidden h-full w-full">
                <img
                  src="assets/images/ai/auth-img.jpg"
                  alt=""
                  class="w-full h-full transform -scale-x-100"
                />
                <div class="absolute inset-0 bg-default-950/40">
                  <div class="flex items-end justify-center h-full">
                    <div class="p-6 text-start">
                      <h5 class="text-xl font-bold text-white mb-3">
                        Is the best way, <br /> to find any network liqudity
                        pool address!
                      </h5>
                      <p class="text-base font-medium text-default-500  text-white">
                        Simple way to find liqudity pools address by provideing
                        the following details and get pool address
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col h-full p-10 lg:ps-0">
              <div class="pb6 my-auto">
                <h4 class="text-2xl font-bold text-white mb-4">
                  Check Liqudity Pool Address
                </h4>
                <p class="text-default-300 mb-8 max-w-sm ">
                  Enter details of the 2 tokens and pool fee.
                </p>

                <div class="text-start">
                  <div class="mb-4">
                    <label class="block text-base/normal font-semibold text-default-200 mb-2">
                      Token A
                    </label>
                    <input
                      onChange={(e) => handleFormFieldChange("token_A", e)}
                      type="text"
                      class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      placeholder="Enter your token A"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-base/normal font-semibold text-default-200 mb-2">
                      Token B
                    </label>
                    <input
                      onChange={(e) => handleFormFieldChange("token_B", e)}
                      class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      type="text"
                      placeholder="Enter your token B"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block text-base/normal font-semibold text-default-200 mb-2">
                      Fee
                    </label>
                    <input
                      onChange={(e) => handleFormFieldChange("fee", e)}
                      class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      type="text"
                      placeholder="Enter pool fee"
                    />
                  </div>

                  <div class="mb-6 text-center">
                    <button
                      onClick={() => CALL_POOL_ADDRESS()}
                      class="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-primary-600/90 text-white rounded-lg transition-all duration-500 group hover:bg-primary-600 mt-5"
                    >
                      <span class="fw-bold">Get Pool Address</span>{" "}
                    </button>
                  </div>

                  {poolAddress && (
                    <>
                      {poolAddress.map((pool, index) => (
                        <div class="mb-4">
                          <input
                            onClick={(e) => navigator.clipboard.writeText(pool)}
                            class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                            type="text"
                            value={`${index + 1}: ${pool} `}
                          />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPool;
