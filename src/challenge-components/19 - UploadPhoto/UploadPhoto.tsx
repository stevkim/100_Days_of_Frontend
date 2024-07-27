import Dropzone from "./components/Dropzone";
import { useState } from "react";

const UploadPhoto = () => {
  const [images, setImages] = useState<File[]>([]);

  return (
    <section className="flex h-page w-full justify-center bg-gray-200">
      <div className="mt-20 h-fit min-w-[500px] rounded-lg bg-white px-4 py-8">
        <h1 className="text-xl">Upload Photo</h1>
        <Dropzone />
      </div>
    </section>
  );
};

export default UploadPhoto;
