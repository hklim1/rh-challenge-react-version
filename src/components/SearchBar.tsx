
interface SearchBarProps {
    onChange: (term: string) => void;
}

export const SearchBar = ({ onChange }: SearchBarProps ) => {
    return <input onChange={event => onChange(event.target.value)}></input>
};