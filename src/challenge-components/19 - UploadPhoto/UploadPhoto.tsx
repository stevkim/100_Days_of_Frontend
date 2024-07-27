import Dropzone from "./components/Dropzone";
import { useState } from "react";
import { toImageArray } from "./lib/toImageArray";
import PreviewList from "./components/PreviewList";

const UploadPhoto = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleSetImages = (files: FileList | null) => {
    const imageFiles = toImageArray(files) as File[];
    console.log(imageFiles);
    setImages([...images, ...imageFiles]);
  };

  const removeImage = (input: File) => {
    setImages(images.filter((image) => image !== input));
  };

  return (
    <section className="flex h-page w-full justify-center overflow-y-scroll bg-gray-200">
      <div className="mt-20 h-fit w-[500px] rounded-lg bg-white px-4 py-8">
        <h1 className="text-xl">Upload Photo</h1>
        <Dropzone handleSetImages={handleSetImages} />
        <PreviewList images={images} removeImage={removeImage} />
      </div>
    </section>
  );
};

export default UploadPhoto;
