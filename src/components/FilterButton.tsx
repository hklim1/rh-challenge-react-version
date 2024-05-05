import { useState } from "react";

interface StyleSheet {
    [key: string]: React.CSSProperties;
  }

interface FilterButtonProps {
    title: string;
    onChange: (isActive: boolean) => void;
};

export const FilterButton = ({ title, onChange }: FilterButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    const onChangeActive = () => {
        setIsActive(!isActive);
        onChange(!isActive);
    };

    return <text style={isActive ? styles.filterActive : styles.filterInactive} 
            onClick={onChangeActive}>{title}</text>
};

const styles: StyleSheet = {
    filterActive: {
        backgroundColor: "red"
    },
    filterInactive: {
        backgroundColor: "white"
    }
}