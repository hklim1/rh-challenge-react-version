import { useState } from "react";
import { FilterButton } from "../FilterButton/FilterButton";
import { ListFilter } from "lucide-react";
import "./Filter.scss"

interface FilterProps {
  onChange: (filters: string[]) => void;
}

export const Filter = ({ onChange }: FilterProps) => {
  const [filters, setFilters] = useState<string[]>([]);

  const onChangeFilters = (isActive: boolean, filter: string) => {
    let newFilters: string[] = [...filters];
    if (isActive && !newFilters.includes(filter)) {
      newFilters.push(filter);
    } else if (!isActive) {
      newFilters = newFilters.filter((f) => f != filter);
    }
    onChange(newFilters);
    setFilters(newFilters);
  };

  return (
    <div id="filterButtonsContainer">
      <div id="filterIcon">
        <ListFilter size={30} />
      </div>
      <FilterButton
        title={"First Name"}
        onChange={(isActive) => onChangeFilters(isActive, "first")}
      />
      <FilterButton
        title={"Last Name"}
        onChange={(isActive) => onChangeFilters(isActive, "last")}
      />
      <FilterButton
        title={"Email"}
        onChange={(isActive) => onChangeFilters(isActive, "email")}
      />
    </div>
  );
};
