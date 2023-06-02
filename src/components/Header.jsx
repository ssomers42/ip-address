import { useRef } from 'react';
import icon from '../assets/icon-arrow.svg';
import { getIpData } from '../helpers/getIpData';

export const Header = ({ handleIpChange, ipData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ipData = await getIpData(inputRef.current.value);
    handleIpChange(ipData);
  };

  const inputRef = useRef(null);

  return (
    <div id="header">
      <div className={ipData ? 'slideup' : ''}>
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search for any IP address or domain"
            type="text"
            // pattern="^(([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3}):){7}([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3})$"
            ref={inputRef}
            required
          />
          <button type="submit">
            <img src={icon} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};
