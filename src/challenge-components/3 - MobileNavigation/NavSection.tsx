import type { TNavLink } from "./data";
import LinkBtn from "./components/LinkBtn";

interface Props {
  links: TNavLink[];
}

const NavSection = ({ links }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {links.map((nav) => {
        return <LinkBtn key={nav.id} nav={nav} />;
      })}
    </div>
  );
};

export default NavSection;
