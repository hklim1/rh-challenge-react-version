import { useState } from "react";
import { FilterButton } from "./FilterButton";

interface FilterProps {
    onChange: (filters: string[]) => void;
};

export const Filter = ({onChange}: FilterProps) => {
    const [filters, setFilters] = useState<string[]>([]);

    const onChangeFilters = (isActive: boolean, filter: string) => {
        let newFilters: string[] = [...filters];
        if (isActive && !newFilters.includes(filter)) {
            newFilters.push(filter);            
        } else if (!isActive) {
            newFilters = newFilters.filter(f => f != filter);
        };
        onChange(newFilters);
        setFilters(newFilters);
    };

    return<div style={style.filter}>
        <FilterButton title={"First"} onChange={(isActive) => onChangeFilters(isActive, "first")}/>
        <FilterButton title={"Last"} onChange={(isActive) => onChangeFilters(isActive, "last")}/>
        <FilterButton title={"Email"} onChange={(isActive) => onChangeFilters(isActive, "email")}/>
        </div>

};

const style = {
    filter: {
        display: "flex",
    }
}