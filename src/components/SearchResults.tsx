import React from "react";

const SearchResults = ({
  location,
  setLocationInput,
}: {
  location: { city: string; country: string };
  setLocationInput: (searchString: string) => void;
}) => {
  return (
    <li
      onClick={(e: React.MouseEvent<HTMLLIElement>) =>
        setLocationInput(e.currentTarget.innerText.split(",")[0])
      }
    >
      {location.city}, {location.country}
    </li>
  );
};

export default SearchResults;
