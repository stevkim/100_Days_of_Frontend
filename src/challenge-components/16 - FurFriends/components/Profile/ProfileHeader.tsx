import Distance from "../Distance";
import DoggoSex from "../List/DoggoSex";

interface ProfileHeaderProps {
  name: string;
  sex: string;
  breed: string;
  location: { lat: number; long: number };
}

const ProfileHeader = ({ name, sex, location, breed }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-row justify-between px-4">
      <div className="flex flex-col">
        <p className="flex items-center text-2xl font-bold">
          {name} <DoggoSex sex={sex} />
        </p>
        <div className="flex w-full items-center text-xs text-muted">
          {breed}{" "}
        </div>
      </div>
      <Distance location={location} />
    </div>
  );
};

export default ProfileHeader;
