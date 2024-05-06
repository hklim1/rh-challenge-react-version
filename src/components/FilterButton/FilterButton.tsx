import { useState } from "react";
import "./FilterButton.scss";

interface FilterButtonProps {
  title: string;
  onChange: (isActive: boolean) => void;
}

export const FilterButton = ({ title, onChange }: FilterButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const onChangeActive = () => {
    setIsActive(!isActive);
    onChange(!isActive);
  };

  return (
    <text
      id={isActive ? "activeFilterButton" : "disabledFilterButton"}
      onClick={onChangeActive}
    >
      {title}
    </text>
  );
};
