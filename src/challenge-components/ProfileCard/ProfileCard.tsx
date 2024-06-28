import Socials from "./Socials";
import Headline from "./Headline";
import ButtonWrapper from "./ButtonWrapper";
import ProfileImage from "./ProfileImage";
import { User } from "./data";
import "./profileCard.css";

const ProfileCard = () => {
  const {
    firstName,
    lastName,
    displayName,
    headline,
    image,
    facebook,
    instagram,
    twitter,
    dribbble,
    linkedIn,
  } = User;

  return (
    <div className="profile-card flex h-[30rem] w-[22rem] flex-col items-center justify-center gap-4 rounded-[2rem] border p-8 text-center">
      <ProfileImage image={image} />
      <div className="mt-auto">
        <h4 className="text-2xl tracking-[.5rem]">
          {firstName + " " + lastName}
        </h4>
        <h6 aria-label="display name" className="text-sm text-gray-600">
          @{displayName}
        </h6>
      </div>
      <Socials socials={{ facebook, instagram, twitter, dribbble, linkedIn }} />
      <Headline headline={headline} />
      <ButtonWrapper />
    </div>
  );
};

export default ProfileCard;
