import {
  User,
  Mail,
  Bell,
  MapPin,
  Handshake,
  Settings,
  UsersRound,
  House,
  LineChart,
} from "lucide-react";
import UserImage from "@/assets/headshot.jpg";

export type TUser = {
  firstName: string;
  lastName: string;
  title: string;
  image: string;
};

export const UserInfo = {
  firstName: "Steven",
  lastName: "Kim",
  title: "Software Engineer",
  image: UserImage,
};

export type TNavLink = {
  id: number | string;
  name?: string;
  Icon: typeof User;
};

export const PrimaryNavLinks: TNavLink[] = [
  {
    id: 1,
    name: "Personal Data",
    Icon: User,
  },
  {
    id: 2,
    name: "Messages",
    Icon: Mail,
  },
  {
    id: 3,
    name: "Notifications",
    Icon: Bell,
  },
  {
    id: 4,
    name: "Location",
    Icon: MapPin,
  },
  {
    id: 5,
    name: "Community",
    Icon: Handshake,
  },
];

export const SecondaryNavLinks = [
  {
    id: 6,
    name: "FAQ",
    Icon: UsersRound,
  },
  {
    id: 7,
    name: "Settings",
    Icon: Settings,
  },
];

export const BottomNavLinks = [
  {
    id: "home",
    Icon: House,
  },
  {
    id: "chart",
    Icon: LineChart,
  },
  {
    id: "mail",
    Icon: Mail,
  },
  {
    id: "info",
    Icon: User,
  },
];
