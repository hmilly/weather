import { Citys } from "../Interface";

const SearchResults = ({
  location,
  setLocationInput,
  setCitySearch,
}: {
  location: Citys["features"][0]["properties"];
  setLocationInput: (searchString: string) => void;
  setCitySearch: any;
}) => {
  const formatedLocation = [location.city, location.county, location.country]
    // eslint-disable-next-line
    .map((f) => {
      if (f !== undefined) return f !== location.country ? `${f}, ` : `${f}`;
    })
    .join("");

  return (
    <li
      key={location.place_id}
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        setLocationInput(formatedLocation);
        setCitySearch("");
      }}
    >
      <p>{formatedLocation}</p>
    </li>
  );
};

export default SearchResults;
