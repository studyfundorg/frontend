import * as React from "react";
import { SVGProps } from "react";

export const ReferralIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={9} cy={6} r={4} stroke="#121315" strokeWidth={1.5} />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 9a3 3 0 1 0 0-6"
    />
    <ellipse cx={9} cy={17} stroke="#121315" strokeWidth={1.5} rx={7} ry={4} />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
    />
  </svg>
);

export const LeaderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#121315"
      strokeWidth={1.2}
      d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.05-1.266-.076-1.9.4-2.485.476-.586 1.045-.682 2.184-.874A26.374 26.374 0 0 1 12 2c1.783 0 3.253.157 4.377.347 1.138.192 1.708.288 2.183.874.476.586.451 1.219.4 2.485-.18 4.553-1.2 10.294-6.96 10.294Z"
    />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M12 16v3"
    />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804L15.5 22Z"
    />
    <path
      stroke="#121315"
      strokeWidth={1.2}
      d="m19 5 .949.316c.99.33 1.485.495 1.768.888.283.393.283.915.283 1.958v.073c0 .86 0 1.291-.207 1.643-.207.352-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888C2 6.597 2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643.207.352.584.561 1.336.98L6.5 12.5M11.146 6.023C11.526 5.34 11.716 5 12 5c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z"
    />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M18 22H6"
    />
  </svg>
);

export const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
    />
    <path
      stroke="#121315"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4h4"
    />
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke="#121315"
      strokeDasharray="0.5 3.5"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const ReferralBoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={234}
    height={200}
    fill="none"
    {...props}
  >
    <rect width={200} height={200} x={19} fill="#E8F2FF" rx={100} />
    <path
      fill="#45B369"
      d="M186.239 27.877a25.626 25.626 0 0 0-5.49-8.41 25.604 25.604 0 0 0-8.291-5.676 25.748 25.748 0 0 0-9.82-2.063c-3.39-.04-6.739.592-9.881 1.857a25.568 25.568 0 0 0-9.597 6.738L118.456 47.48 93.752 20.323a26.396 26.396 0 0 0-9.597-6.738 25.774 25.774 0 0 0-9.901-1.918 25.68 25.68 0 0 0-9.885 2.043 25.527 25.527 0 0 0-8.328 5.653 25.86 25.86 0 0 0-5.534 8.453 25.372 25.372 0 0 0-1.837 9.925c.04 3.386.754 6.735 2.084 9.86 1.346 3.103 3.284 5.94 5.737 8.288a25.517 25.517 0 0 0 8.47 5.474c3.88 1.634 7.963 3.47 11.843 3.061l3.268.41 25.113 1.427 4.696.612 8.984-.203 14.292.203 4.898 1.225 22.255-3.674 1.634.203c3.88.41 6.329-1.63 10.003-3.061a26.065 26.065 0 0 0 14.069-13.903 26.043 26.043 0 0 0 .223-19.786ZM70.272 52.787a15.364 15.364 0 0 1-5.165-3.389 15.662 15.662 0 0 1-3.491-5.105 15.748 15.748 0 0 1-1.269-6.044 15.96 15.96 0 0 1 1.144-6.083 15.362 15.362 0 0 1 3.39-5.165 15.843 15.843 0 0 1 17.232-3.616 18.022 18.022 0 0 1 5.922 4.086L111.92 53.81H77.623a14.894 14.894 0 0 1-7.35-1.021Zm96.165 0a15.055 15.055 0 0 1-7.148 1.022h-34.301l23.889-26.338a13.433 13.433 0 0 1 5.92-4.086 15.991 15.991 0 0 1 6.085-1.164c2.084.02 4.144.45 6.062 1.269 1.901.815 3.636 1.999 5.104 3.49a15.803 15.803 0 0 1 3.37 5.186 16.28 16.28 0 0 1-.345 12.127 16.212 16.212 0 0 1-8.636 8.495Z"
    />
    <path
      fill="#1570EF"
      d="M191.344 180.799h-60.842l-13.68-14.698-10.618 14.698H45.362a4.684 4.684 0 0 1-1.817-.325 5.183 5.183 0 0 1-1.532-1.021 4.765 4.765 0 0 1-.998-1.532 4.679 4.679 0 0 1-.349-1.817v-42.67l11.231-13.68-11.23-10.415V67.894c0-.613.101-1.225.348-1.817a4.758 4.758 0 0 1 .998-1.532c.45-.426.96-.775 1.532-1.018a5.055 5.055 0 0 1 1.817-.328h60.842L116.619 73.2 130.502 63.2h60.842c.612 0 1.244.101 1.816.328a5.182 5.182 0 0 1 1.533 1.018c.429.45.774.96 1.021 1.532a4.72 4.72 0 0 1 .325 1.817l-.203 41.445-11.231 10.821 11.231 13.274.203 42.67a4.863 4.863 0 0 1-1.428 3.268 4.855 4.855 0 0 1-3.267 1.427Z"
    />
    <path
      fill="#FEC84B"
      d="M195.836 109.339h-65.334v-46.14h-24.298v46.14H40.667v24.095h65.537v47.365h24.298v-47.365h65.334v-24.095Z"
    />
    <circle cx={29} cy={195} r={5} fill="#12B76A" />
    <circle cx={9} cy={173.333} r={8.333} fill="#FFE58B" />
    <circle cx={229} cy={20} r={5} fill="#FD853A" />
  </svg>
);

export const GoldTrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFB000"
        d="M25.806 4.278s-1.508 6.825-7.14 9.298a4.05 4.05 0 0 0-1.98 1.869l-2.265 4.413s4.367 2.122 6.353-1.59c0 0-1.224.122-1.747-.04 0 0 5.047.03 6.226-4.175 0 0-1.23.869-1.839.894 0 0 2.819-1.493 2.93-5.205 0 0-2.133 2.656-3.493 3.24-.005 0 4.722-2.834 2.955-8.704ZM.883 4.278s1.508 6.825 7.14 9.298a4.05 4.05 0 0 1 1.98 1.869l2.265 4.413s-4.367 2.122-6.353-1.59c0 0 1.224.122 1.747-.04 0 0-5.042.03-6.225-4.175 0 0 1.228.869 1.838.894 0 0-2.819-1.493-2.93-5.205 0 0 2.133 2.656 3.493 3.24.006 0-4.722-2.834-2.955-8.704ZM12.385 12.464h1.92v6.5h-1.92v-6.5Z"
      />
      <path
        fill="#FFB000"
        d="M11.177 20.782a2.167 2.167 0 1 1 4.337 0h-4.337Z"
      />
      <path
        fill="#4D7382"
        d="M10.298 20.782h6.094c.558 0 1.015.457 1.015 1.015v1.778H9.282v-1.778c0-.558.457-1.015 1.016-1.015Z"
      />
      <path
        fill="#FFB000"
        d="M8.647 23.575h9.395a1.396 1.396 0 1 1 0 2.793H8.647a1.396 1.396 0 1 1 0-2.793Z"
      />
      <path
        fill="#FFB000"
        stroke="url(#b)"
        d="m14.787 1.78 1.74 3.444.112.224.247.043 3.692.652c1.284.226 1.84 1.895.893 2.901l-2.615 2.786-.164.174.034.238.542 3.85c.198 1.415-1.19 2.386-2.334 1.796h-.001l-3.36-1.725-.228-.118-.229.118-3.353 1.725c-1.144.59-2.532-.381-2.334-1.795l.542-3.851.033-.238-.164-.175-2.62-2.785h-.001c-.947-1.006-.39-2.675.892-2.9l3.694-.653.246-.043.113-.224 1.739-3.444a1.597 1.597 0 0 1 2.884 0Z"
      />
      <path
        fill="#28292B"
        d="M13.361 13.368V7.235l.244.322-1.645.787V7.22l2.212-1.05h.39v7.198h-1.2Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={13.345}
        x2={13.345}
        y1={0.368}
        y2={18.568}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB000" />
        <stop offset={1} stopColor="#996A00" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.345.368h26v26h-26z" />
      </clipPath>
    </defs>
  </svg>
);

export const SilverTrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#D8D8D8"
        d="M26.21 4.751s-1.508 6.825-7.14 9.298a4.05 4.05 0 0 0-1.98 1.869l-2.265 4.413s4.367 2.122 6.352-1.59c0 0-1.223.122-1.746-.04 0 0 5.047.03 6.225-4.175 0 0-1.229.869-1.838.894 0 0 2.818-1.493 2.93-5.205 0 0-2.133 2.656-3.494 3.24-.005 0 4.723-2.834 2.956-8.704ZM1.287 4.751s1.508 6.825 7.14 9.298a4.05 4.05 0 0 1 1.98 1.869l2.265 4.413s-4.367 2.122-6.353-1.59c0 0 1.224.122 1.747-.04 0 0-5.042.03-6.226-4.175 0 0 1.23.869 1.839.894 0 0-2.819-1.493-2.93-5.205 0 0 2.132 2.656 3.493 3.24.005 0-4.722-2.834-2.955-8.704Z"
      />
      <path fill="#E8A354" d="M12.79 12.937h1.92v6.5h-1.92v-6.5Z" />
      <path
        fill="#D8D8D8"
        d="M11.58 21.255c0-1.199.97-2.169 2.169-2.169 1.198 0 2.168.97 2.168 2.169h-4.336Z"
      />
      <path
        fill="#4D7382"
        d="M10.702 21.255h6.093c.559 0 1.016.457 1.016 1.015v1.778H9.686V22.27c0-.56.457-1.016 1.016-1.016Z"
      />
      <path
        fill="#D8D8D8"
        d="M9.051 24.048h9.395a1.396 1.396 0 1 1 0 2.793H9.05a1.396 1.396 0 1 1 0-2.793Z"
      />
      <path
        fill="#D8D8D8"
        stroke="url(#b)"
        d="m15.191 2.253 1.739 3.444.113.224.246.043 3.693.652c1.284.226 1.84 1.895.893 2.9v.002l-2.615 2.784-.164.175.034.237.542 3.851c.198 1.414-1.19 2.386-2.335 1.796l-3.36-1.726-.228-.117-.229.118-3.353 1.725c-1.144.59-2.533-.381-2.335-1.795l.543-3.852.033-.237-.164-.175-2.621-2.785c-.947-1.006-.39-2.675.892-2.9l3.693-.653.247-.043.113-.224 1.738-3.444a1.597 1.597 0 0 1 2.885 0Z"
      />
      <path
        fill="#28292B"
        d="M11.271 13.84v-.297l2.012-2.5c.24-.296.469-.58.683-.85.218-.27.396-.532.533-.786.136-.254.205-.506.205-.757a.97.97 0 0 0-.518-.889 1.145 1.145 0 0 0-.562-.131c-.227 0-.43.05-.61.151-.179.101-.319.241-.42.42-.1.18-.151.388-.151.625h-1.206a2.24 2.24 0 0 1 .312-1.167c.205-.342.487-.609.845-.8a2.546 2.546 0 0 1 1.23-.294c.437 0 .824.088 1.163.264.341.173.61.414.805.723.199.306.298.66.298 1.064 0 .345-.072.668-.215.967a4.966 4.966 0 0 1-.571.898c-.234.303-.496.63-.786.982l-1.06 1.294v.039l1.016-.02h1.714v1.065H11.27Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={13.748}
        x2={13.748}
        y1={21.841}
        y2={2.341}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#43423B" />
        <stop offset={1} stopColor="#A99595" stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.749.84h26v26h-26z" />
      </clipPath>
    </defs>
  </svg>
);

export const BronzTrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="#97744C"
      d="M25.739 4.751s-1.509 6.825-7.14 9.298a4.05 4.05 0 0 0-1.98 1.869l-2.265 4.413s4.367 2.122 6.352-1.59c0 0-1.224.122-1.747-.04 0 0 5.048.03 6.226-4.175 0 0-1.229.869-1.838.894 0 0 2.818-1.493 2.93-5.205 0 0-2.133 2.656-3.494 3.24-.005 0 4.723-2.834 2.956-8.704ZM.816 4.751s1.508 6.825 7.14 9.298a4.05 4.05 0 0 1 1.98 1.869L12.2 20.33s-4.367 2.122-6.353-1.59c0 0 1.224.122 1.747-.04 0 0-5.043.03-6.226-4.175 0 0 1.23.869 1.838.894 0 0-2.818-1.493-2.93-5.205 0 0 2.133 2.656 3.494 3.24.005 0-4.723-2.834-2.955-8.704Z"
    />
    <path fill="#383128" d="M12.317 12.937h1.92v6.5h-1.92v-6.5Z" />
    <path fill="#97744C" d="M11.11 21.255a2.167 2.167 0 1 1 4.337 0h-4.338Z" />
    <path
      fill="#4D7382"
      d="M10.23 21.255h6.094c.559 0 1.016.457 1.016 1.015v1.778H9.215V22.27c0-.56.457-1.016 1.015-1.016Z"
    />
    <path
      fill="#97744C"
      d="M8.58 24.048h9.395a1.396 1.396 0 1 1 0 2.793H8.58a1.396 1.396 0 1 1 0-2.793Z"
    />
    <path
      fill="#97744C"
      stroke="url(#a)"
      d="m14.72 2.253 1.739 3.444.113.224.246.043 3.693.652c1.284.226 1.84 1.895.893 2.9v.002l-2.615 2.784-.164.175.033.237.543 3.851c.198 1.414-1.19 2.386-2.335 1.796l-3.36-1.726-.229-.117-.228.118-3.353 1.725c-1.145.59-2.533-.381-2.335-1.795l.543-3.852.033-.237-.164-.175-2.621-2.785c-.947-1.006-.391-2.675.892-2.9l3.693-.653.247-.043.113-.224 1.738-3.444a1.597 1.597 0 0 1 2.885 0Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12.777}
        x2={13.777}
        y1={21.841}
        y2={7.841}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#383128" />
        <stop offset={1} stopColor="#9E8972" />
      </linearGradient>
    </defs>
  </svg>
);

export const USDTIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      fill="#50AF95"
      d="M39.397 24.838c-2.671 10.715-13.523 17.235-24.239 14.563C4.448 36.731-2.073 25.877.6 15.164 3.269 4.448 14.121-2.073 24.833.598c10.715 2.672 17.235 13.525 14.564 24.24Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M22.53 22.267c-.14.011-.871.055-2.501.055-1.296 0-2.217-.04-2.54-.055-5.01-.22-8.749-1.092-8.749-2.136s3.74-1.915 8.75-2.139v3.407c.327.023 1.265.079 2.561.079 1.556 0 2.335-.065 2.475-.078v-3.406c5 .223 8.73 1.095 8.73 2.137s-3.73 1.914-8.73 2.135l.005.002Zm0-4.625v-3.049h6.977V9.944H10.514v4.65h6.975v3.047c-5.67.26-9.933 1.383-9.933 2.73 0 1.345 4.263 2.467 9.933 2.729v9.77h5.042v-9.774c5.656-.26 9.913-1.382 9.913-2.727s-4.253-2.467-9.913-2.728v.001Z"
      clipRule="evenodd"
    />
  </svg>
);
export const BTCIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="#F7931A"
      d="M37.431 23.596C34.894 33.775 24.584 39.97 14.404 37.431 4.23 34.894-1.966 24.584.573 14.406 3.109 4.226 13.419-1.97 23.596.569 33.775 3.106 39.969 13.417 37.43 23.596Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M27.38 16.293c.377-2.528-1.548-3.888-4.18-4.794l.854-3.425-2.085-.52-.831 3.335a86.325 86.325 0 0 0-1.67-.393l.837-3.357-2.084-.52-.855 3.424c-.453-.103-.899-.205-1.33-.313l.002-.01-2.876-.718-.554 2.226s1.547.355 1.514.377c.844.21.997.77.972 1.213l-.973 3.902c.058.014.133.036.217.07l-.06-.016-.16-.04-1.364 5.467c-.103.256-.365.641-.955.495.02.03-1.516-.378-1.516-.378l-1.035 2.386 2.713.677c.297.074.59.15.881.226h.002c.202.054.404.106.604.157l-.863 3.465 2.082.52.855-3.428c.569.154 1.12.296 1.661.43l-.851 3.412 2.085.52.863-3.458c3.555.673 6.228.401 7.353-2.814.907-2.59-.045-4.083-1.915-5.057 1.362-.314 2.388-1.21 2.662-3.06v-.001Zm-4.765 6.68c-.59 2.375-4.309 1.393-6.01.944-.153-.04-.29-.077-.406-.106l1.144-4.59c.143.036.316.075.513.12 1.76.394 5.365 1.203 4.76 3.632ZM18.21 17.21c1.419.379 4.513 1.204 5.051-.954.55-2.209-2.456-2.874-3.924-3.2-.166-.036-.311-.068-.43-.098l-1.038 4.163c.098.024.213.055.341.09Z"
      clipRule="evenodd"
    />
  </svg>
);

export const EthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#EDF0F4" />
    <path
      fill="#343434"
      d="m18.948 7.6-.151.513V23.01l.151.15 6.915-4.087L18.948 7.6Z"
    />
    <path fill="#8C8C8C" d="m18.95 7.6-6.915 11.473 6.915 4.088V7.6Z" />
    <path
      fill="#3C3C3B"
      d="m18.948 24.47-.085.104v5.306l.085.249 6.92-9.745-6.92 4.086Z"
    />
    <path fill="#8C8C8C" d="M18.95 30.129v-5.66l-6.915-4.085 6.915 9.745Z" />
    <path fill="#141414" d="m18.95 23.16 6.914-4.087-6.915-3.143v7.23Z" />
    <path fill="#393939" d="m12.035 19.073 6.915 4.088v-7.23l-6.915 3.143Z" />
  </svg>
);

export const SolanaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#000" />
    <path
      fill="url(#a)"
      d="M11.78 23.501a.714.714 0 0 1 .504-.208h17.413c.318 0 .477.384.252.609l-3.44 3.44a.714.714 0 0 1-.504.208H8.592a.357.357 0 0 1-.252-.61l3.44-3.439Z"
    />
    <path
      fill="url(#b)"
      d="M11.78 10.658a.734.734 0 0 1 .504-.208h17.413c.318 0 .477.384.252.609l-3.44 3.44a.714.714 0 0 1-.504.208H8.592a.357.357 0 0 1-.252-.609l3.44-3.44Z"
    />
    <path
      fill="url(#c)"
      d="M26.51 17.039a.714.714 0 0 0-.505-.209H8.592a.357.357 0 0 0-.252.61l3.44 3.439a.714.714 0 0 0 .504.208h17.413a.357.357 0 0 0 .252-.608l-3.44-3.44Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-31.121}
        x2={-31.585}
        y1={7.22}
        y2={30.532}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={-36.391}
        x2={-36.854}
        y1={4.469}
        y2={27.781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-33.773}
        x2={-34.236}
        y1={5.835}
        y2={29.148}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);

export const LitecoinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19.159} cy={18.842} r={16.942} fill="#fff" />
    <path
      fill="#345D9D"
      fillRule="evenodd"
      d="M0 19C0 8.507 8.507 0 19 0h.11A18.945 18.945 0 0 1 38 19c0 10.493-8.507 19-19 19S0 29.493 0 19Zm17.344 7.315 1.978-6.671 3.082-.874.644-2.208-3.036.92 3.22-10.95v-.174a.533.533 0 0 0-.552-.515h-4.094a.695.695 0 0 0-.69.506l-3.819 12.973-3.036.92-.69 2.116 3.036-.92-2.714 9.247h16.194a.686.686 0 0 0 .69-.506l.92-3.174v-.175a.534.534 0 0 0-.552-.515H17.344Z"
      clipRule="evenodd"
    />
  </svg>
);

export const BinanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="#F3BA2F"
      d="M37.427 23.596C34.89 33.775 24.58 39.97 14.401 37.431 4.225 34.894-1.97 24.584.569 14.406 3.105 4.226 13.415-1.97 23.592.569 33.77 3.106 39.965 13.417 37.427 23.596Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m18.999 12.059-4.92 4.92-2.863-2.863L19 6.334l7.785 7.784-2.863 2.863-4.922-4.922Zm-9.804 4.078L6.332 19l2.863 2.862L12.057 19l-2.862-2.863Zm4.884 4.885 4.92 4.92 4.922-4.922 2.864 2.86-.001.002-7.785 7.785-7.782-7.783-.005-.004 2.867-2.858Zm14.724-4.883L25.94 19l2.863 2.863L31.665 19l-2.862-2.862Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M21.904 18.999 19 16.094l-2.147 2.146-.247.247-.508.509-.004.004.004.004L19 21.906l2.905-2.904.001-.002-.002-.001"
    />
  </svg>
);

export const TronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="#FC070C"
      fillRule="evenodd"
      d="M19 38C8.55 38 0 29.45 0 18.905.095 8.455 8.55-.095 19.095.001 29.545.096 38 8.55 38 19.19 37.905 29.544 29.45 38 19 38"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M32.539 14.98c-.519-.479-1.12-1.062-1.746-1.67-.88-.855-1.81-1.758-2.63-2.486l-.084-.058a1.59 1.59 0 0 0-.461-.258l-.633-.118C22.615 9.575 8.45 6.932 8.159 6.967a.582.582 0 0 0-.242.091l-.079.063a.927.927 0 0 0-.216.349l-.02.054V7.865c.961 2.678 3.46 8.658 5.766 14.18 1.95 4.668 3.763 9.009 4.396 10.749.083.259.24.748.536.773h.066c.158 0 .832-.89.832-.89s12.036-14.596 13.254-16.15c.157-.192.297-.398.415-.616.062-.346-.063-.7-.328-.93Zm-10.253 1.7 5.137-4.26 3.013 2.776-8.15 1.484Zm-10.84-7.527 8.845 7.249 5.465-4.61-14.31-2.639Zm9.643 9.148 9.052-1.459-10.349 12.469 1.297-11.01Zm-1.538-.528-9.306-7.897 7.96 19.443 1.346-11.546Z"
      clipRule="evenodd"
    />
  </svg>
);
