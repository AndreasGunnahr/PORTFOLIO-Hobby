import cn from "classnames";
import { ICON_TYPES, Icon, Link } from "components/elements";

const BTN_BASE = "flex items-center justify-center space-x-2 font-medium";
const BTN_TYPES = {
  primary: "bg-black text-white border-2 border-black",
  secondary: "bg-transparent border-2 border-gray-300 text-black",
};

const BTN_SIZES = {
  md: "py-3 px-5 text-sm w-full md:text-base",
  lg: "py-3 px-4 text-base w-full md:py-4 md:text-lg",
};

type sizeType = "xs" | "md" | "lg";
type variantType = "primary" | "secondary";

interface IButton {
  text: string;
  startIcon?: ICON_TYPES;
  href?: string;
  endIcon?: ICON_TYPES;
  disabled?: boolean;
  onClick?: () => void;
  size?: sizeType;
  variant: variantType;
}

export const Button: React.FC<IButton> = ({
  text,
  variant,
  startIcon,
  endIcon,
  size,
  href,

  ...rest
}) => {
  const BTN_CLASS = cn(BTN_BASE, BTN_TYPES[variant], BTN_SIZES[size]);

  const button = (
    <button className={BTN_CLASS} {...rest}>
      {startIcon && (
        <i className="h-5 w-5">
          <Icon variant={startIcon} />
        </i>
      )}
      <p>{text}</p>
      {endIcon && (
        <i className="h-5 w-5">
          <Icon variant={endIcon} />
        </i>
      )}
    </button>
  );

  if (href)
    return (
      <Link to={href} className="flex w-full">
        {button}
      </Link>
    );

  return button;
};
