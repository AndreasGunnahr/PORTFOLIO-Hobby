import cn from "classnames";
const BREAK_COLORS = {
  gray: "bg-gray-100",
  black: "bg-black",
};

interface IBreak {
  color?: "gray" | "black";
  mt?: number;
  mb?: number;
  my?: number;
}

export const Break: React.FC<IBreak> = ({ color = "gray", mt, mb, my }) => {
  const BREAK_CLASS = cn("h-px w-full", BREAK_COLORS[color], {
    [`mt-${mt}`]: mt,
    [`mb-${mb}`]: mb,
    [`my-${my}`]: my,
  });

  return <hr className={BREAK_CLASS}></hr>;
};
