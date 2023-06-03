import { Result } from './Result';

export const ResultsContainer = ({ ipData }) => {
  return (
    <div id="results-container">
      <Result header={'IP ADDRESS'} details={ipData.ip} />
      <Result
        header={'LOCATION'}
        details={`${ipData.location.city}, ${ipData.location.region}`}
      />
      <Result header={'TIME ZONE'} details={ipData.location.timezone} />
      <Result header={'ISP'} details={ipData.isp} />
    </div>
  );
};
