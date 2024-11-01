import React, { useState, useContext, useEffect } from "react";

//INTERNAL IMPORT
import {
  Header,
  Home,
  Action,
  GetPool,
  Networks,
  LiqudityHistory,
  PoolHistory,
  Loader,
} from "../components/index";
import { CONTEXT } from "../context/index";

const index = () => {
  const { GET_POOL_ADDRESS, GET_POOL_DETAILS, loader } = useContext(CONTEXT);

  const [activeNetwork, setActiveNetwork] = useState("");
  const [activeComponent, setActiveComponent] = useState("Home");

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"));
    setActiveNetwork(network?.name);
  }, [activeNetwork]);
  return (
    <div class="bg-slate-900">
      <Header
        setActiveComponent={setActiveComponent}
        activeNetwork={activeNetwork}
      />
      {activeComponent == "Home" ? (
        <>
          <Home
            setActiveComponent={setActiveComponent}
            GET_POOL_DETAILS={GET_POOL_DETAILS}
          />
        </>
      ) : activeComponent == "Liqudity" ? (
        <>
          <GetPool GET_POOL_ADDRESS={GET_POOL_ADDRESS} />
        </>
      ) : activeComponent == "Pool History" ? (
        <>
          <PoolHistory setActiveComponent={setActiveComponent} />
        </>
      ) : activeComponent == "Liqudity History" ? (
        <>
          <LiqudityHistory setActiveComponent={setActiveComponent} />
        </>
      ) : activeComponent == "Networks" ? (
        <>
          <Networks
            setActiveNetwork={setActiveNetwork}
            activeNetwork={activeNetwork}
          />
        </>
      ) : (
        ""
      )}
      <Action />

      {loader && (
        <div className="new_loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default index;
