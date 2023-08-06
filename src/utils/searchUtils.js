import { toJS } from "mobx";

// Utility function to extract items from searchResults and convert it to plain JS
export function getItemsFromSearchManagement(searchResults, type) {
  const plainSearchResults = toJS(searchResults);
  if (plainSearchResults) {
    return plainSearchResults || [];
  } else {
    return [];
  }
}
