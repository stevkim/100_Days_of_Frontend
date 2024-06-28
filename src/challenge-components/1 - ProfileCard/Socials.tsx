import FacebookLogo from "@/assets/1 - ProfileCard/Social-Icons/Facebook_icon.svg";
import DribbbleLogo from "@/assets/1 - ProfileCard/Social-Icons/Dribbble_logo.svg";
import XLogo from "@/assets/1 - ProfileCard/Social-Icons/X_icon.svg";
import InstagramLogo from "@/assets/1 - ProfileCard/Social-Icons/Instagram_icon.svg";
import LinkedInLogo from "@/assets/1 - ProfileCard/Social-Icons/LinkedIn_logo.svg";
import SocialsBtn from "./Buttons/SocialsBtn";

interface Props {
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    dribbble: string;
    linkedIn: string;
  };
}

const Socials = ({ socials }: Props) => {
  const { facebook, instagram, twitter, dribbble, linkedIn } = socials;

  return (
    <div className="flex flex-row gap-8">
      <SocialsBtn link={facebook} image={FacebookLogo} />
      <SocialsBtn link={linkedIn} image={LinkedInLogo} />
      <SocialsBtn link={twitter} image={XLogo} />
      <SocialsBtn link={instagram} image={InstagramLogo} />
      <SocialsBtn link={dribbble} image={DribbbleLogo} />
    </div>
  );
};

export default Socials;
