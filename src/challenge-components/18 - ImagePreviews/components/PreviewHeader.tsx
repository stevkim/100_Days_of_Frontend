import PreviewSelector from "./PreviewSelector";

const PreviewHeader = () => {
  return (
    <div className="flex h-[50px] w-full items-center justify-between bg-gray-800 px-4 text-white">
      <h1 className="text-lg">Images</h1>
      <PreviewSelector />
    </div>
  );
};

export default PreviewHeader;
