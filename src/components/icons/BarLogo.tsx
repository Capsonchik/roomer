
type BarLogoProps = {
  width: string
  height: string
  color: string
}

export const BarLogo = ({width, height, color}: BarLogoProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <g id="layer1">
        <path
          d="M 0 2 L 0 18 L 20 18 L 20 17 L 1 17 L 1 2 L 0 2 z M 8 4 L 8 8 L 6 8 L 6 12 L 5 12 L 5 10 L 2.5 10 L 2 10 L 2 11 L 2.5 11 L 4 11 L 4 13 L 7 13 L 7 9 L 9 9 L 9 5 L 10 5 L 10 7 L 12 7 L 12 11 L 15 11 L 15 9 L 17 9 L 17 7 L 18.5 7 L 19 7 L 19 6 L 18.5 6 L 16 6 L 16 8 L 14 8 L 14 10 L 13 10 L 13 6 L 11 6 L 11 4 L 8 4 z "
          style={{ fill: color, fillOpacity: "1", stroke: "none", strokeWidth: "0px" }}
        />
      </g>
    </svg>
  );
};
