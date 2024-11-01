import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ activeNetwork, setActiveComponent }) => {
  const navMenu = [
    "Home",
    "Liqudity",
    "Pool History",
    "Liqudity History",
    "Networks",
  ];
  return (
    <header id="navbar-sticky" class="navbar">
      <div class="container">
        <nav>
          <a href="/" class="logo">
            <img src="assets/images/logo.png" class="h-10" alt="WebAi Logo" />
          </a>

          <div class="lg:hidden flex items-center ms-auto px-2.5">
            <button
              class="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <CgMenuRight />
            </button>
          </div>

          <div
            id="mobileMenu"
            class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
          >
            <ul id="navbar-navlist" class="navbar-nav">
              {navMenu.map((list, index) => (
                <li
                  onClick={() => setActiveComponent(list)}
                  class="nav-item"
                  key={list}
                >
                  <a class="nav-link">{list}</a>
                </li>
              ))}
            </ul>

            <div class="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
              <a
                href="#"
                class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3"
              >
                <SiBlockchaindotcom />
                {activeNetwork || "Select Network"}
              </a>
            </div>
          </div>

          <div class="hidden lg:flex items-center">
            <a class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
              <SiBlockchaindotcom />
              {activeNetwork || "Select Network"}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
