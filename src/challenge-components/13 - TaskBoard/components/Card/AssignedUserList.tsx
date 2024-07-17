import { TUser } from "../../types/taskType";
import UserIconImage from "../UserIconImage";

interface AssignedUserListProps {
  list: TUser[];
}

const AssignedUserList = ({ list }: AssignedUserListProps) => {
  return (
    <div className="flex flex-row gap-x-[-10%]">
      {list.map((user) => {
        return (
          <UserIconImage
            image={user.image}
            key={user.image}
            className="mr-[-10px]"
          />
        );
      })}
    </div>
  );
};

export default AssignedUserList;
