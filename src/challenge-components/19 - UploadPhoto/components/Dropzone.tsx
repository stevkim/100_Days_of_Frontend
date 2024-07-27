import { useRef } from "react";
import ImageIcon from "@/assets/19 - UploadPhoto/imageicon.png";

interface DropzoneProps {
  handleSetImages: (files: FileList | null) => void;
}

const Dropzone = ({ handleSetImages }: DropzoneProps) => {
  const dropzoneRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (dropzoneRef.current?.disabled) {
      return;
    }
    dropzoneRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    handleSetImages(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    handleSetImages(files);
  };

  return (
    <div
      className="my-4 flex h-[15rem] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <img src={ImageIcon} className="w-[30%] opacity-75" />
      <p className="text-lg">
        Drop your image here or <span className="text-blue-500">browse</span>
        <span className="block text-center text-base text-muted">
          PNG, JPG, JPEG
        </span>
      </p>
      <input
        type="file"
        ref={dropzoneRef}
        onChange={handleInputChange}
        accept="image/png, image/jpeg, image/jpg"
        multiple
        className="hidden"
      />
    </div>
  );
};

export default Dropzone;
