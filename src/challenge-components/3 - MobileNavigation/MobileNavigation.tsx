import {
  UserInfo,
  PrimaryNavLinks,
  SecondaryNavLinks,
  BottomNavLinks,
} from "./data";
import ProfileSection from "./ProfileSection";
import Separator from "@/components/Separator";
import NavSection from "./NavSection";
import BottomNavs from "./BottomNavs";

const MobileNavigation = () => {
  return (
    <section className="mt-20 w-full rounded-2xl px-4 py-8 shadow-2xl md:w-[18rem]">
      <ProfileSection user={UserInfo} />
      <Separator />
      <NavSection links={PrimaryNavLinks} />
      <Separator />
      <NavSection links={SecondaryNavLinks} />
      <BottomNavs links={BottomNavLinks} />
    </section>
  );
};

export default MobileNavigation;
