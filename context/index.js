import React, { useState, useEffect } from "react";
import { ethers, Contract } from "ethers";
import axios from "axios";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import { FACTORY_ABI, FACTORY_ADDRESS } from "./constants";
import { parseErrorMsg } from "../utils/shortaddress";

export const CONTEXT = React.createContext();

export const CONTEXT_Provider = ({ children }) => {
  const DAPP_NAME = "WebAI";
  const [loader, setLoader] = useState(false);

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 4000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 4000 });

  //GTE POOL ADDRESS
  const GET_POOL_ADDRESS = async (liqudity, selectedNetwork) => {
    try {
      setLoader(true);
      const PROVIDER = new ethers.providers.JsonRpcProvider(
        selectedNetwork.rpcUrl
      );
      const factoryContract = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        PROVIDER
      );

      const poolAddress = await factoryContract.functions.getPool(
        liqudity.token_A,
        liqudity.token_B,
        Number(liqudity.fee)
      );

      const poolHistory = {
        token_A: liqudity.token_A,
        token_B: liqudity.token_B,
        fee: liqudity.fee,
        network: selectedNetwork.name,
        poolAddress: poolAddress,
      };

      let poolArray = [];
      const poolLists = localStorage.getItem("poolHistory");
      if (poolLists) {
        poolArray = JSON.parse(localStorage.getItem("poolHistory"));
        poolArray.push(poolHistory);
        localStorage.setItem("poolHistory", JSON.stringify(poolArray));
      } else {
        poolArray.push(poolHistory);
        localStorage.setItem("poolHistory", JSON.stringify(poolArray));
      }
      setLoader(false);
      notifySuccess("Successfully Completed");
      return poolAddress;
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      setLoader(false);
      notifyError(errorMsg);
    }
  };

  //GET POOL DETAILS

  async function getPoolData(poolContract, selectedNetwork, poolAddress) {
    const [liquidity, fee, token0, token1, slot0] = await Promise.all([
      poolContract.liquidity(),
      poolContract.fee(),
      poolContract.token0(),
      poolContract.token1(),
    ]);

    return {
      liquidity: liquidity.toString(),
      fee: fee,
      token_A: token0,
      token_B: token1,
      network: selectedNetwork.name,
      poolAddress: poolAddress,
    };
  }

  const GET_POOL_DETAILS = async (poolAddress, selectedNetwork) => {
    try {
      setLoader(true);
      const provider = new ethers.providers.JsonRpcProvider(
        selectedNetwork.rpcUrl
      );
      const poolContract = new Contract(
        poolAddress,
        UniswapV3Pool.abi,
        provider
      );

      const poolData = await getPoolData(
        poolContract,
        selectedNetwork,
        poolAddress
      );

      let liqudityArray = [];
      const liqudityLists = localStorage.getItem("liqudityHistory");
      if (liqudityLists) {
        liqudityArray = JSON.parse(localStorage.getItem("liqudityHistory"));
        liqudityArray.push(poolData);
        localStorage.setItem("liqudityHistory", JSON.stringify(liqudityArray));
      } else {
        liqudityArray.push(poolData);
        localStorage.setItem("liqudityHistory", JSON.stringify(liqudityArray));
      }
      setLoader(false);
      notifySuccess("Successfully Completed");
      return poolData;
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      setLoader(false);
      notifyError(errorMsg);
    }
  };

  return (
    <CONTEXT.Provider
      value={{ GET_POOL_ADDRESS, GET_POOL_DETAILS, loader, DAPP_NAME }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
