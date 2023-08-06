"use client";
import Header from "@/components/Header/Header";
import SearchSection from "@/components/SearchSection/SearchSection";
import SearchResult from "@/components/SearchResult/SearchResult";
import { SearchManagement } from "@/services/searchManagement";

// Initialize a new instance of the SearchManagement class for handling search operations
const search = new SearchManagement();

export default function Home() {
  return (
    <>
      <Header>Search by repositories & users 🔎</Header>
      {/* 
        Pass the 'search' object as a prop, This will enable the components to perform search operations 
        and manage search-related state using the 'search' object.
      */}
      <div className="flex items-center justify-center flex-col">
        <SearchSection search={search} />
      </div>
      <SearchResult search={search} />
    </>
  );
}
