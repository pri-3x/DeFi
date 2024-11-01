import React from "react";

const IconOne = () => {
  return (
    <svg
      viewBox="0 0 1026 1026"
      fill="none"
      aria-hidden="true"
      class="absolute inset-0 h-full w-full animate-spin-slow"
    >
      <path
        class="stroke-white/10"
        d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
        stroke-opacity="0.7"
      ></path>
      <path
        d="M513 1025C230.23 1025 1 795.77 1 513"
        stroke="url(#:S2:-gradient-1)"
        stroke-linecap="round"
      ></path>
      <defs>
        <linearGradient
          id=":S2:-gradient-1"
          x1="1"
          y1="513"
          x2="1"
          y2="1025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7c3aed"></stop>
          <stop offset="1" stop-color="#7c3aed" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconOne;
