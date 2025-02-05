import React, { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";

//INTERNA IMPORT
import { shortenAddress } from "../utils/shortaddress";
import { Promo } from "../components/index";

const GetLiqudity = ({ setActiveComponent }) => {
  const [liqudityDetails, setLiqudityDetails] = useState([]);

  useEffect(() => {
    const liqudity = JSON.parse(localStorage.getItem("liqudityHistory"));
    setLiqudityDetails(liqudity?.reverse());
  }, []);
  return (
    <section id="price" class="pt-32">
      <div class="container">
        {liqudityDetails ? (
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {liqudityDetails?.map((pool, index) => (
              <div>
                <div class="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500">
                  <div class="border border-white/10 rounded-xl">
                    <div class="p-6">
                      <a class="flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300">
                        {pool.network}{" "}
                        <i data-lucide="move-right" class="h-5 w-5"></i>
                      </a>
                      <hr class="my-5 border-dashed border-white/10" />
                      <ul role="list" class="mt-3 text-sm text-default-700">
                        <li class="flex items-center gap-2 py-2">
                          <i
                            onClick={(e) =>
                              navigator.clipboard.writeText(pool.token_A)
                            }
                            class="inline-block  w-5  text-primary"
                          >
                            <GoCopy />
                          </i>

                          <span class="text-default-50">
                            Token A: {shortenAddress(pool.token_A)}
                          </span>
                        </li>
                        <li class="flex items-center gap-2 py-2">
                          <i
                            onClick={(e) =>
                              navigator.clipboard.writeText(pool.token_B)
                            }
                            class="inline-block  w-5  text-primary"
                          >
                            <GoCopy />
                          </i>

                          <span class="text-default-50">
                            Token B: {shortenAddress(pool.token_B)}
                          </span>
                        </li>
                        <li class="flex items-center gap-2 py-2">
                          <i
                            onClick={(e) =>
                              navigator.clipboard.writeText(pool.fee)
                            }
                            class="inline-block  w-5  text-primary"
                          >
                            <GoCopy />
                          </i>

                          <span class="text-default-50">Fee: {pool.fee}</span>
                        </li>
                        <li class="flex items-center gap-2 py-2">
                          <i
                            onClick={(e) =>
                              navigator.clipboard.writeText(pool.liquidity)
                            }
                            class="inline-block  w-5  text-primary"
                          >
                            <GoCopy />
                          </i>

                          <span class="text-default-50">
                            Liquidity: {pool.liquidity}
                          </span>
                        </li>
                        <li class="flex items-center gap-2 py-2">
                          <i
                            onClick={(e) =>
                              navigator.clipboard.writeText(pool.poolAddress)
                            }
                            class="inline-block  w-5  text-primary"
                          >
                            <GoCopy />
                          </i>

                          <span class="text-default-50">
                            PoolAddress: {shortenAddress(pool.poolAddress)}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Promo setActiveComponent={setActiveComponent} />
        )}
      </div>
    </section>
  );
};

export default GetLiqudity;
