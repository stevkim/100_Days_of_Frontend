import { useRef } from "react";

const useDrag = () => {
  const draggedRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    draggedRef.current = e.currentTarget;
  };

  const handleDragEnd = () => {
    draggedRef.current = null;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return { draggedRef, handleDragStart, handleDragEnd, handleDragOver };
};

export default useDrag;
