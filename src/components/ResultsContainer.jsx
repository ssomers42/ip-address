import { Result } from './Result';

export const ResultsContainer = ({ ipAddress, ipInfo }) => {
  return (
    <div>
      <Result header={'IP ADDRESS'} details={ipAddress} />
      <Result
        header={'LOCATION'}
        details={`${ipInfo.location.city}, ${ipInfo.location.region}, ${ipInfo.location.postalCode}`}
      />
      <Result header={'TIME ZONE'} details={ipInfo.location.timezone} />
      <Result header={'ISP'} details={ipInfo.isp} />
    </div>
  );
};
