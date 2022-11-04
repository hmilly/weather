import { City } from "../interface/Interface";

const SearchResults = ({
  cityObj,
  setLocationInput,
  setCitySearch,
}: {
  cityObj: City;
  setLocationInput: (searchString: string) => void;
  setCitySearch: any;
}) => {
  const formatedLocation =
    [
      cityObj?.name,
      cityObj?.adminDivision2?.name,
      cityObj?.adminDivision1?.name,
      cityObj?.country?.name,
    ]
      // eslint-disable-next-line
      .map((f) =>
        f !== cityObj.country.name && f !== undefined ? `${f}, ` : ""
      )
      .join("") + cityObj.country.name;

  return (
    <li
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        setLocationInput(formatedLocation);
        setCitySearch(null);
      }}
    >
      <p>{formatedLocation}</p>
    </li>
  );
};

export default SearchResults;
