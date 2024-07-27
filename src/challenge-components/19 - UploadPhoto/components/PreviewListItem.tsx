import { useMemo, useState } from "react";
import { bytesToMB } from "../lib/bytesToMB";
import ConfirmDelete from "./ConfirmDelete";
import { XCircle } from "lucide-react";
import Modal from "@/components/Modal/Modal";

interface PreviewListItemProps {
  image: File;
  removeImage: (input: File) => void;
}

const PreviewListItem = ({ image, removeImage }: PreviewListItemProps) => {
  // Modal
  const [open, setOpen] = useState(false);
  const imageURL = useMemo(() => URL.createObjectURL(image), [image]);

  const handleImageRemoval = () => {
    removeImage(image);
    setOpen(false);
  };

  return (
    <div className="flex h-[5rem] w-full gap-2 rounded-lg border p-2">
      <img
        src={imageURL}
        className="aspect-square h-full rounded-lg object-cover"
        alt={`Preview of ${image.name}`}
      />
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm">{image.name}</span>
        <span className="text-xs text-muted">{bytesToMB(image.size)} MB</span>
      </div>
      <button className="ml-auto" onClick={() => setOpen(true)}>
        <XCircle className="rounded-full text-red-500" />
      </button>
      {open ? (
        <Modal open={open}>
          <ConfirmDelete
            confirmRemove={handleImageRemoval}
            closeModal={() => setOpen(false)}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default PreviewListItem;
