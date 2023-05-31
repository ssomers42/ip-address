export const Result = ({ header, details }) => {
  return (
    <div className="result">
      <span className="result-header">{header}</span>
      <h3 className="result-details">{details}</h3>
    </div>
  );
};
