import type { TTask } from "../types/taskType";
import { useContext } from "react";
import { DragEventContext } from "../TaskBoard";
import SeverityBadge from "./Card/SeverityBadge";
import { formatDate } from "../lib";
import AssignedUserList from "./Card/AssignedUserList";

interface TaskCardProps {
  task: TTask;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { handleDragStart, handleDragEnd } = useContext(DragEventContext);

  return (
    <div
      id={task.id}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="flex w-full flex-col gap-4 rounded-lg bg-white p-2 shadow-lg"
    >
      <div className="flex w-full justify-between">
        <SeverityBadge severity={task.severity} />
        <span className="mr-1 text-xs text-muted">
          {formatDate(task.date!)}
        </span>
      </div>
      {task.image ? (
        <img
          className="pointer-events-none aspect-video w-full rounded-md shadow-lg"
          src={task.image}
          alt={task.taskTitle}
        />
      ) : null}
      <h4 className="text-xl font-semibold">{task.taskTitle}</h4>
      <p className="w-full">{task.taskContent}</p>
      <AssignedUserList list={task.users || []} />
    </div>
  );
};

export default TaskCard;
