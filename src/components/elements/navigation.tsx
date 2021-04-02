import { Link } from "components/elements";
import cn from "classnames";
import { Icon } from "./icon";

interface INavigation {
  direction?: "col";
}

export const Navigation: React.FC<INavigation> = ({ direction }) => {
  return (
    <ul
      className={cn("flex items-center font-semibold", {
        "flex-col text-white space-x-0 space-y-8 text-4xl": direction,
        "space-x-6 text-lg": !direction,
      })}
    >
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/projects"}>Projects</Link>
      </li>
      <li>
        <a href="/Consultant-CV-2021.pdf">CV</a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/AndreasGunnahr"
          className="flex items-center space-x-1"
        >
          <span>Github</span>
          <Icon
            variant="external-link"
            className={cn("flex items-center", {
              "h-5 w-5 space-x-1": !direction,
              "h-8 w-8 space-x-2": direction,
            })}
          />
        </a>
      </li>
    </ul>
  );
};
