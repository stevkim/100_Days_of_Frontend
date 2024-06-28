interface Props {
  image: string;
}

const ProfileImage = ({ image }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={image}
        className="aspect-square w-[6rem] rounded-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
