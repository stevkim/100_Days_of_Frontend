import FacebookLogo from "@/assets/SocialMediaIcons/facebook.svg";
import DribbbleLogo from "@/assets/SocialMediaIcons/dribbble.svg";
import XLogo from "@/assets/SocialMediaIcons/x.svg";
import InstagramLogo from "@/assets/SocialMediaIcons/instagram.svg";
import LinkedInLogo from "@/assets/SocialMediaIcons/linkedin.svg";
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
