import { dogs } from "./data";
import { useParams } from "@tanstack/react-router";
import ProfileImage from "./components/Profile/ProfileImage";
import ProfileHeader from "./components/Profile/ProfileHeader";
import ProfileMetrics from "./components/Profile/ProfileMetrics";
import ProfileDescription from "./components/Profile/ProfileDescription";
import ButtonWrapper from "./components/Profile/ButtonWrapper";

const DogProfilePage = () => {
  const { dogId } = useParams({ from: "/fur-friends/$dogId" });

  const doggo = dogs.find((dog) => parseInt(dogId) === dog.id);

  if (!doggo) {
    return null;
  }

  return (
    <div className="mt-20 flex h-fit w-full flex-col gap-4 rounded-md bg-white pb-4 shadow-lg md:w-[22rem]">
      <ProfileImage image={doggo.image} alt={`Picture of ${doggo.name}`} />
      <ProfileHeader
        name={doggo.name}
        sex={doggo.sex}
        breed={doggo.breed}
        location={doggo.location}
      />
      <ProfileMetrics
        age={doggo.age}
        weight={doggo.weight}
        height={doggo.height}
      />
      <ProfileDescription description={doggo.description} />
      <ButtonWrapper />
    </div>
  );
};

export default DogProfilePage;
