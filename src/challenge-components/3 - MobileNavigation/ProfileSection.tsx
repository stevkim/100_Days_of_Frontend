import type { TUser } from "./data";

interface Props {
  user: TUser;
}

const ProfileSection = ({ user }: Props) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <img src={user.image} className="h-10 w-10 rounded-lg object-cover" />
      <div className="flex flex-col">
        <p className="text-sm font-semibold">
          {user.firstName + " " + user.lastName}
        </p>
        <p className="text-sm">{user.title}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
