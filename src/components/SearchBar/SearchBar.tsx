import "./SearchBar.scss";
import { Search } from "lucide-react";

interface SearchBarProps {
  onChange: (term: string) => void;
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <>
      <div id="searchContainer">
        <input
          id="searchBar"
          placeholder="Search Users"
          onChange={(event) => onChange(event.target.value)}
        ></input>
        <button id="searchButton">
          <Search size={30} color={"white"} />
        </button>
      </div>
    </>
  );
};
