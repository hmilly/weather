import React from "react";

const SearchResults = ({
  location,
  setLocationInput,
}: {
  location: { city: string; country: string; place_id: string };
  setLocationInput: (searchString: string) => void;
}) => {
  return (
    <li
      key={location.place_id}
      onClick={(e: React.MouseEvent<HTMLLIElement>) =>
        setLocationInput(e.currentTarget.innerText.split(",")[0])
      }
    >
      <p>
        {location.city}, {location.country}
      </p>
    </li>
  );
};

export default SearchResults;
