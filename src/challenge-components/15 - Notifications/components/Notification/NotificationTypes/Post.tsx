import type { TNotification, TPost } from "../../../types/notificationType";
import TimeStamp from "../../TimeStamp";

interface PostProps {
  content: TNotification<unknown>;
}

const Post = ({ content }: PostProps) => {
  const typedContent = content as TNotification<TPost>;

  return (
    <>
      <p className="text-xs">
        <span className="font-semibold">{typedContent.user.name}</span> created
        a new
        <span className="font-semibold"> post.</span>
      </p>
      <TimeStamp time={typedContent.date} />
    </>
  );
};

export default Post;
