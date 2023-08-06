import { makeAutoObservable } from "mobx";
import { Octokit } from "octokit";

// SearchType constant to represent search types
export const SearchType = {
  repositories: "repos",
  users: "users",
};

// Create an instance of the Octokit class with the GitHub API token
export const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
});

// SearchManagement class to manage search state and API calls
export class SearchManagement {
  query = "";
  isInitialSearchState = true;
  page = 1;
  itemsNum = 0;
  type = SearchType.repositories;
  searchResults = [];
  loading = false;

  constructor() {
    makeAutoObservable(this); // Automatically make all class properties observable
  }

  async fetchResponse() {
    try {
      this.isLoading();

      // Make API call using octokit instance and search type, query, and page
      const res = await octokit.rest.search[this.type]({
        q: this.query.replace(" ", "+"),
        page: this.page,
        per_page: 10,
      });

      this.setSearchResults(res.data);

      this.increasePageNum();
      this.setItemsNum(res.data.total_count);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading();
    }
  }

  setQuery(query) {
    this.page = 1;
    this.query = query;
  }

  reset() {
    this.loading = false;
    this.query = "";
    this.page = 1;
    this.isInitialSearchState = true;
    this.itemsNum = 0;
    this.searchResults = [];
  }

  isLoading() {
    this.loading = !this.loading;
  }

  setType(type) {
    this.type = type;
    this.reset();
  }

  setIsInitialSearchState(value) {
    this.isInitialSearchState = value;
  }

  setItemsNum(num) {
    this.itemsNum = num;
  }

  increasePageNum() {
    this.page += 1;
  }

  resetPageNum() {
    this.page = 1;
  }

  setSearchResults(data) {
    this.searchResults.push(...data.items);
  }

  setSearchResultToDefault() {
    this.searchResults = [];
  }
}
