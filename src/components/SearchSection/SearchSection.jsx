import { observer } from "mobx-react-lite";
import { useMemo, useState, useCallback } from "react";
import { debounce } from "lodash";
import { ToggleButton, ToggleButtonGroup, TextField } from "@mui/material";

const SearchSection = observer(({ search }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  // Calculate the search label based on the search type using useMemo
  const searchLabel = useMemo(() => {
    return search.type === "users"
      ? "Using the users search"
      : search.type === "repos"
      ? "Using the repository search"
      : "You should select type";
  }, [search.type]);

  // Define a debouncedOnChange function to avoid calling search frequently
  const debouncedOnChange = useCallback(
    debounce((query) => {
      // Set the isInitialSearchState to false, indicating it's not the first search
      search.setIsInitialSearchState(false);

      // Update the search query in the search object
      search.setQuery(query);

      // Perform the search if there is a query, otherwise reset the search results
      if (query) {
        search.fetchResponse();
      } else {
        search.setSearchResultToDefault();
      }
    }, 500), // Debounce time of 500ms
    [search] // Recreate the debounced function only when the search object changes
  );

  // Handle input change event and call the debouncedOnChange function
  const handleInputChange = (e) => {
    if (!search.type) return;
    const query = e.target.value;
    setSearchInputValue(query);
    debouncedOnChange(query);
  };

  // Handle button change event to update the search type
  const handleButtonChange = (e, value) => {
    setSearchInputValue("");
    search.setType(value);
  };

  return (
    <>
      <div className="TextField" style={{ borderColor: !search.type && "red" }}>
        <TextField
          color="info"
          name="search"
          className="w-[100%]"
          focused
          variant="outlined"
          type="text"
          value={searchInputValue}
          onChange={handleInputChange}
          placeholder={searchLabel}
        />
      </div>
      {!search.type && (
        <p className="mt-2 text-red-500">
          IMPORTANT: Select the type of search before you begin
        </p>
      )}

      <ToggleButtonGroup
        color="info"
        value={search.type}
        exclusive
        onChange={handleButtonChange}
        aria-label="searchType"
        className="ToggleButtonGroup"
      >
        <ToggleButton className="ToggleButton" value={"repos"}>
          Repositories
        </ToggleButton>
        <ToggleButton className="ToggleButton" value={"users"}>
          Users
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
});

export default SearchSection;
