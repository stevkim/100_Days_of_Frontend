import type { TArticle } from "../../types/dataTypes";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CurrentIndicator from "../CurrentIndicator";

interface ArticleCardProps {
  article: TArticle;
  articleNumber: number;
}

const ArticleCard = ({ article, articleNumber }: ArticleCardProps) => {
  return (
    <div className="relative flex h-fit w-[80%] flex-col rounded-md bg-white shadow-md md:h-[30rem] md:max-h-[300px] md:flex-row">
      <img
        src={article.coverPhoto}
        className="h-[300px] w-full rounded-t-md object-cover md:w-[40%] md:rounded-l-md"
      />
      <div className="flex flex-col gap-4 p-4">
        <CardContent title={article.name} content={article.content} />
        <CardFooter author={article.author} date={article.date} />
      </div>
      <CurrentIndicator articleNumber={articleNumber} />
    </div>
  );
};

export default ArticleCard;
