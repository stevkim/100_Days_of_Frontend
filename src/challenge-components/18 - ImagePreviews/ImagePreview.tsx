import { useState, createContext } from "react";
import PreviewHeader from "./components/PreviewHeader";
import Gallery from "./components/Carousel/Gallery";
import List from "./components/List/List";
import Grid from "./components/Grid/Grid";
import useList, { type Controls } from "./hooks/useList";
import type { TImage } from "./types/imageType";
import { IMAGES } from "./data";
import "./Preview.css";

export const ImageListContext = createContext<{
  list: TImage[];
  controls: Controls;
}>({
  list: [],
  controls: {
    index: 0,
    incrementIndex: () => {},
    decrementIndex: () => {},
    setIndex: () => {},
  },
});

export const PreviewLayoutContext = createContext<{
  layout: string;
  setLayout: (input: string) => void;
}>({
  layout: "",
  setLayout: () => {},
});

const ImagePreview = () => {
  const [layout, setLayout] = useState<string>("grid");
  const [list, controls] = useList<TImage>(IMAGES);

  return (
    <section className="h-page w-full overflow-y-scroll bg-black">
      <PreviewLayoutContext.Provider value={{ layout, setLayout }}>
        <ImageListContext.Provider value={{ list, controls }}>
          <PreviewHeader />
          {layout === "gallery" ? <Gallery /> : null}
          {layout === "list" ? <List /> : null}
          {layout === "grid" ? <Grid /> : null}
        </ImageListContext.Provider>
      </PreviewLayoutContext.Provider>
    </section>
  );
};

export default ImagePreview;
