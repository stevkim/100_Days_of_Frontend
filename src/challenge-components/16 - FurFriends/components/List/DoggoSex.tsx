import female from "@/assets/16 - FurFriends/female.svg";
import male from "@/assets/16 - FurFriends/male.svg";

interface DoggoSexProps {
  sex: string;
}

const DoggoSex = ({ sex }: DoggoSexProps) => {
  return (
    <>
      {sex === "male" ? (
        <img
          src={male}
          alt="Symbol for male"
          className="ml-2 aspect-square w-[12px]"
        />
      ) : (
        <img
          src={female}
          alt="Symbol for male"
          className="ml-2 aspect-square w-[12px]"
        />
      )}
    </>
  );
};

export default DoggoSex;
