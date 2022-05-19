import { SVGProps } from "react";

export const ChevronIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg
    className={`fill-white ${className}`}
    height="12"
    viewBox="0 0 7 12"
    width="7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.29708 0.5L0 1.79663L4.28037 6.00183L0 10.2034L1.29708 11.5L6.875 6.00183L1.29708 0.5Z" />
    <desc>chevron</desc>
  </svg>
);
