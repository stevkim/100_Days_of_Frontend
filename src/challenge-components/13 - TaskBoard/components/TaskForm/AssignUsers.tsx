import type { TUser } from "../../types/taskType";
import { Check } from "lucide-react";
import UserIconImage from "../UserIconImage";

interface AssignUsersProps {
  list: TUser[];
  handleUserList: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const AssignUsers = ({ list, handleUserList }: AssignUsersProps) => {
  return (
    <>
      <div>Assign users</div>
      <div className="flex w-full flex-wrap gap-4 p-4">
        {list.map((user) => {
          return (
            <button
              key={`${user.id} + ${user.selected}`}
              role="button"
              onClick={(e) => handleUserList(e, user.id)}
              className="relative leading-3"
            >
              <UserIconImage
                image={user.image}
                className={`mx-auto ${user.selected ? "grayscale" : ""}`}
              />
              <span className="text-[.7rem]">{user.name}</span>
              {user.selected ? (
                <div className="absolute right-[10%] top-[-10%] flex items-center justify-center text-blue-500">
                  <Check size={"1.2em"} strokeWidth={"5px"} />
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default AssignUsers;
