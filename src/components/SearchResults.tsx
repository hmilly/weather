import React from "react";

const SearchResults = ({
  result,
  setSearch,
}: {
  result: { city: string; country: string };
  setSearch: (search: string) => void;
}) => {
  return (
    <li
      onClick={(e: React.MouseEvent<HTMLLIElement>) =>
        setSearch(e.currentTarget.innerText.split(",")[0])
      }
    >
      {result.city}, {result.country}
    </li>
  );
};

export default SearchResults;
