import IconBtn from "./components/IconBtn";
import type { TNavLink } from "./data";

interface Props {
  links: TNavLink[];
}

const BottomNavs = ({ links }: Props) => {
  return (
    <div className="mt-12 flex flex-row justify-between">
      {links.map((nav) => {
        return <IconBtn key={nav.id} Icon={nav.Icon} />;
      })}
    </div>
  );
};

export default BottomNavs;
