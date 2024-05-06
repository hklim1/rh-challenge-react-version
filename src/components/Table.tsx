import { useCallback, useEffect, useState } from "react";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface TableProps {
  data: User[];
  searchTerm: string;
  filters: string[];
}

export const Table = ({ data, searchTerm, filters }: TableProps) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onDelete = useCallback(
    (userToDelete: User) => {
      const newData = filteredData.filter(
        (currentUser) =>
          !(
            currentUser.first_name === userToDelete.first_name &&
            currentUser.last_name === userToDelete.last_name &&
            currentUser.email === userToDelete.email
          )
      );
      setFilteredData(newData);
    },
    [filteredData]
  );

  const newData = filteredData.filter((user) => {
    if (searchTerm === "") {
      return true;
    }
    const first_nameHasSearch = user.first_name
      .toLowerCase()
      .includes(searchTerm);
    const last_nameHasSearch = user.last_name.toLowerCase().includes(searchTerm);
    const emailHasSearch = user.email.toLowerCase().includes(searchTerm);
    let results = [];

    if (filters.length === 0) {
      return first_nameHasSearch || last_nameHasSearch || emailHasSearch;
    }

    for (let i = 0; i < filters.length; i++) {
      const element = filters[i];
      if (element == "first") {
        results.push(first_nameHasSearch);
      }
      if (element == "last") {
        results.push(last_nameHasSearch);
      }
      if (element == "email") {
        results.push(emailHasSearch);
      }
    }

    if (results.includes(true)) {
      return true;
    }
    return false;
  });

  return (
    <table>
      <th>First name</th>
      <th>Last name</th>
      <th>Email</th>
      <th>Actions</th>
      {newData.map((currentUser) => {
        return (
          <tr>
            <td>{currentUser.first_name}</td>
            <td>{currentUser.last_name}</td>
            <td>{currentUser.email}</td>
            <td>
              <button onClick={() => onDelete(currentUser)}>delete</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
