import { useState, useEffect } from "react";
import { ARTICLES } from "../data";

const useArticle = () => {
  const [index, setIndex] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(ARTICLES[index]);

  useEffect(() => {
    setCurrentArticle(ARTICLES[index]);
  }, [index]);

  const incrementIndex = () => {
    if (index + 1 >= ARTICLES.length) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const decrementIndex = () => {
    if (index - 1 < 0) {
      setIndex(ARTICLES.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const setArticleIndex = (value: number) => {
    setIndex(value);
  };

  return {
    articleIndex: index,
    currentArticle,
    incrementIndex,
    decrementIndex,
    setArticleIndex,
    listLength: ARTICLES.length,
  };
};

export default useArticle;
