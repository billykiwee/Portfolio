import { HTMLAttributes } from "react";

interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: number;
}

export default function Bubble({ dimension, ...props }: BubbleProps) {
  return (
    <div {...props} className="bubble">
      <svg
        width={dimension || "276"}
        height={dimension || "276"}
        viewBox="0 0 276 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_1610_1784)">
          <circle
            cx="50"
            cy="50"
            r="50"
            transform="matrix(-1 0 0 1 188 44)"
            fill="url(#paint0_linear_1610_1784)"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_1610_1784"
            x="0"
            y="0"
            width="276"
            height="276"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="44" />
            <feGaussianBlur stdDeviation="44" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.443137 0 0 0 0 1 0 0 0 0.44 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1610_1784"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1610_1784"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="13.8133" />
            <feGaussianBlur stdDeviation="6.90667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.170097 0 0 0 0 0.558574 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_1610_1784"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-13.8133" />
            <feGaussianBlur stdDeviation="6.90667" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.148434 0 0 0 0 0.487435 0 0 0 0 0.913437 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_1610_1784"
              result="effect3_innerShadow_1610_1784"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1610_1784"
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1B91EB" />
            <stop offset="1" stop-color="#3359DA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
