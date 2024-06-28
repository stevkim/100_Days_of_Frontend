interface Props {
  headline: string;
}

const Headline = ({ headline }: Props) => {
  return <div className="text-sm">{headline}</div>;
};

export default Headline;
