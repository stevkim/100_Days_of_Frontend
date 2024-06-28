interface Props {
  link: string;
  image: string;
}

const SocialsBtn = ({ link, image }: Props) => {
  return (
    <a href={link} target="_blank" className="hover:invert-[30%]">
      <img
        alt={"Logo for social site leading to " + link}
        src={image}
        className={`h-5 w-5`}
      />
    </a>
  );
};

export default SocialsBtn;
