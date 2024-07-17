type BadgeStyles = {
  [type: string]: string;
  low: string;
  medium: string;
  high: string;
};

interface SeverityBadgeProps {
  severity: string;
}

const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const styles: BadgeStyles = {
    low: " bg-green-500",
    medium: "bg-blue-400",
    high: "bg-pink-500",
  };

  return (
    <div
      className={`w-fit rounded-md px-1 py-[.1rem] text-xs text-white ${styles[severity]}`}
    >
      {severity.toUpperCase()}
    </div>
  );
};

export default SeverityBadge;
