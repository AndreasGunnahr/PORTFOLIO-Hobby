import cn from "classnames";

import { Link, Navigation } from "components/elements";

interface INavbar {
  open: boolean;
  onToggle: (open) => void;
}

export const Navbar: React.FC<INavbar> = ({ open, onToggle }) => {
  return (
    <nav className="relative flex justify-between items-center h-16 pl-6 pr-3 max-w-screen-desktop mx-auto z-50 md:px-12">
      <Link to="/">
        <h1
          className={cn("font-medium text-lg border-2 border-black py-1 px-3", {
            "text-white border-white": open,
          })}
        >
          Andreas Gunnahr
        </h1>
      </Link>
      <div className="md:hidden">
        <svg
          className={cn(
            "h-14 w-14 stroke-current text-black ham hamRotate ham4 ",
            {
              active: open,
              "text-white": open,
            }
          )}
          viewBox="0 0 100 100"
          onClick={onToggle}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div className="hidden md:block">
        <Navigation></Navigation>
      </div>
    </nav>
  );
};
