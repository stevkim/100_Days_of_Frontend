import type { TDOGGO } from "../../types/dogType";
import DoggoSex from "./DoggoSex";
import { useState } from "react";
import LikeBtn from "../LikeBtn";
import Distance from "../Distance";
import { Link } from "@tanstack/react-router";

interface ListItemProps {
  doggo: TDOGGO;
}

const ListItem = ({ doggo }: ListItemProps) => {
  const [like, setLike] = useState(false);

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <Link to={`${doggo.id}`} className="flex w-full rounded-xl shadow-md">
      <img
        src={doggo.image}
        className="aspect-square h-[100px] rounded-xl object-cover"
      />
      <div className="flex w-full flex-col justify-evenly p-4">
        <p className="flex items-center text-lg font-bold">
          {doggo.name} <DoggoSex sex={doggo.sex} />
        </p>
        <div className="flex w-full items-center text-xs text-muted">
          {doggo.breed}{" "}
          <LikeBtn className="ml-auto" like={like} toggleLike={toggleLike} />
        </div>
        <Distance location={doggo.location} />
      </div>
    </Link>
  );
};

export default ListItem;
