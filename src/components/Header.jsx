import { useRef } from 'react';

export const Header = ({ setIpAddress }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIpAddress(inputRef.current.value);
  };
  const inputRef = useRef(null);
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          pattern="^(([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3}):){7}([0-9a-fA-F]{1}|[1-9a-fA-F]{1}[0-9a-fA-F]{1,3})$"
          ref={inputRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
