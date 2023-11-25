function CarouselTriangle({ size, fill }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size || "20px"}
      height={size || "20px"}
      viewBox="0 0 1280.000000 640.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
        fill={fill || "#000000"}
        stroke="none"
      >
        <path
          d="M3198 3205 c-1759 -1756 -3198 -3196 -3198 -3199 0 -3 2880 -6 6400
-6 3520 0 6400 3 6400 7 0 7 -6388 6387 -6399 6390 -3 1 -1445 -1435 -3203
-3192z"
        />
      </g>
    </svg>
  );
}

export default CarouselTriangle;