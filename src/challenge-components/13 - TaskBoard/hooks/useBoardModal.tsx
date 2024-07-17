import { useState } from "react";

const useBoardModal = () => {
  const [currentBoard, setCurrentBoard] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (type: string) => {
    setCurrentBoard(type);
    setOpen(true);
  };

  const closeModal = () => {
    setCurrentBoard(null);
    setOpen(false);
  };

  return { openModal, closeModal, currentBoard, open };
};

export default useBoardModal;
