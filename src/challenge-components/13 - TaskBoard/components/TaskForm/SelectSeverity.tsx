interface SelectSeverityProps {
  value: string;
  handleFormChange: (type: string, value: string) => void;
}

const SelectSeverity = ({ value, handleFormChange }: SelectSeverityProps) => {
  return (
    <label>
      Severity:
      <select
        className="ml-2"
        value={value}
        onChange={(e) => handleFormChange("severity", e.target.value)}
      >
        <option value={"low"}>Low</option>
        <option value={"medium"}>Medium</option>
        <option value={"high"}>High</option>
      </select>
    </label>
  );
};

export default SelectSeverity;
