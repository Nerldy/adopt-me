import { useState } from "react";

const SearchParams = () => {
  const [location, SetLocation] = useState("");

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => SetLocation(e.target.value)}
            id="location"
            value={location}
            type="text"
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
