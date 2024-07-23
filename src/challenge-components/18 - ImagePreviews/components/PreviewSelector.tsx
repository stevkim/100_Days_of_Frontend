import { LayoutGrid, List, GalleryThumbnails } from "lucide-react";
import Separator from "@/components/Separator";
import { useContext } from "react";
import { PreviewLayoutContext } from "../ImagePreview";

const PreviewSelector = () => {
  const { layout, setLayout } = useContext(PreviewLayoutContext);

  return (
    <div className="flex">
      <button
        className={`rounded-sm p-1 ${layout === "grid" ? "bg-gray-700" : ""}`}
        onClick={() => setLayout("grid")}
        disabled={layout === "grid"}
      >
        <LayoutGrid size={16} />
      </button>
      <Separator type="vertical" />
      <button
        className={`rounded-sm p-1 ${layout === "list" ? "bg-gray-700" : ""}`}
        onClick={() => setLayout("list")}
        disabled={layout === "list"}
      >
        <List size={16} />
      </button>
      <Separator type="vertical" />
      <button
        className={`rounded-sm p-1 ${layout === "gallery" ? "bg-gray-700" : ""}`}
        onClick={() => setLayout("gallery")}
        disabled={layout === "gallery"}
      >
        <GalleryThumbnails size={16} />
      </button>
    </div>
  );
};

export default PreviewSelector;
