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
    <section className="flex h-page w-full flex-col items-center justify-center bg-gray-200">
      <div className="w-full rounded-2xl bg-white px-4 py-8 shadow-2xl md:w-[18rem]">
        <ProfileSection user={UserInfo} />
        <Separator />
        <NavSection links={PrimaryNavLinks} />
        <Separator />
        <NavSection links={SecondaryNavLinks} />
        <BottomNavs links={BottomNavLinks} />
      </div>
    </section>
  );
};

export default MobileNavigation;
