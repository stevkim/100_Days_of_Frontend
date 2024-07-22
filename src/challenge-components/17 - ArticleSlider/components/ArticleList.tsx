import ArticleCard from "./ArticleCard/ArticleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useArticle from "../hooks/useArticle";
import ListIndicator from "./ListIndicator";

const ArticleList = () => {
  const {
    articleIndex,
    currentArticle,
    incrementIndex,
    decrementIndex,
    listLength,
    setArticleIndex,
  } = useArticle();

  return (
    <div className="relative flex w-full max-w-[1000px] items-center justify-evenly border-2">
      <button
        className="flex aspect-square h-[30px] items-center justify-center rounded-lg bg-white shadow-lg"
        onClick={decrementIndex}
      >
        <ChevronLeft size={16} />
      </button>
      <ArticleCard article={currentArticle} articleNumber={articleIndex + 1} />
      <button
        className="flex aspect-square h-[30px] items-center justify-center rounded-lg bg-white shadow-lg"
        onClick={incrementIndex}
      >
        <ChevronRight size={16} />
      </button>
      <ListIndicator
        articleIndex={articleIndex}
        setArticleIndex={setArticleIndex}
        listLength={listLength}
      />
    </div>
  );
};

export default ArticleList;
