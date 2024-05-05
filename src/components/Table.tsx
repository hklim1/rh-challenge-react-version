import { useCallback, useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface TableProps {
  data: User[];
  searchTerm: string;
  filters: string[];
}

export const Table = ({ data, searchTerm, filters }: TableProps) => {
  const [filteredData, setFilteredData] = useState(data);

  const onDelete = useCallback(
    (userToDelete: User) => {
      const newData = filteredData.filter(
        (currentUser) =>
          !(
            currentUser.firstName === userToDelete.firstName &&
            currentUser.lastName === userToDelete.lastName &&
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
    const firstNameHasSearch = user.firstName
      .toLowerCase()
      .includes(searchTerm);
    const lastNameHasSearch = user.lastName.toLowerCase().includes(searchTerm);
    const emailHasSearch = user.email.toLowerCase().includes(searchTerm);
    let results = [];

    if (filters.length === 0) {
      return firstNameHasSearch || lastNameHasSearch || emailHasSearch;
    }

    for (let i = 0; i < filters.length; i++) {
      const element = filters[i];
      if (element == "first") {
        results.push(firstNameHasSearch);
      }
      if (element == "last") {
        results.push(lastNameHasSearch);
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
            <td>{currentUser.firstName}</td>
            <td>{currentUser.lastName}</td>
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
