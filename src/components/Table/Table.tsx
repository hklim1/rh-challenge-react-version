import { useEffect, useRef, useState } from "react";
import "./Table.scss";
import { Save, Edit, Trash2 } from "lucide-react";

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
  const [isEdit, setIsEdit] = useState(false);
  const [editedUserId, setEditedUserId] = useState<number | undefined>(
    undefined
  );

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // CRUD OPERATIONS FOR TABLE ROWS
  const onDelete = (userToDelete: User) => {
    const newData = filteredData.filter(
      (currentUser) =>
        !(
          currentUser.first_name === userToDelete.first_name &&
          currentUser.last_name === userToDelete.last_name &&
          currentUser.email === userToDelete.email
        )
    );
    setFilteredData(newData);
  };

  const onEdit = (user: User) => {
    setIsEdit(true);
    setEditedUserId(user.id);
  };

  const onSave = (firstName: string, lastName: string, email: string) => {
    const userIndex = filteredData.findIndex((u) => u.id === editedUserId);
    filteredData[userIndex].first_name = firstName;
    filteredData[userIndex].last_name = lastName;
    filteredData[userIndex].email = email;
    setFilteredData(filteredData);
    setIsEdit(false);
    setEditedUserId(undefined);
  };

  // FILTER LOGIC
  const newData = filteredData.filter((user) => {
    if (searchTerm === "") {
      return true;
    }
    const first_nameHasSearch = user.first_name
      .toLowerCase()
      .includes(searchTerm);
    const last_nameHasSearch = user.last_name
      .toLowerCase()
      .includes(searchTerm);
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

  // TABLE
  return (
    <div id="table-container">
      <table id="dataTable">
        <th>First name</th>
        <th>Last name</th>
        <th>Email Address</th>
        <th>Actions</th>
        {newData.map((currentUser) => {
          const isEditingUser = isEdit && currentUser.id === editedUserId;
          return (
            <tr>
              <td>
                {isEditingUser ? (
                  <input
                    ref={firstNameRef}
                    defaultValue={currentUser.first_name}
                  />
                ) : (
                  currentUser.first_name
                )}
              </td>
              <td>
                {isEditingUser ? (
                  <input
                    ref={lastNameRef}
                    defaultValue={currentUser.last_name}
                  />
                ) : (
                  currentUser.last_name
                )}
              </td>
              <td>
                {isEditingUser ? (
                  <input ref={emailRef} defaultValue={currentUser.email} />
                ) : (
                  currentUser.email
                )}
              </td>
              <td>
                {isEditingUser ? (
                  <button
                    id="saveButton"
                    onClick={() =>
                      onSave(
                        firstNameRef.current?.value ?? currentUser.first_name,
                        lastNameRef.current?.value ?? currentUser.last_name,
                        emailRef.current?.value ?? currentUser.email
                      )
                    }
                  >
                    <Save />
                  </button>
                ) : (
                  <>
                    <button id="editButton" onClick={() => onEdit(currentUser)}>
                      <Edit />
                    </button>
                    <button
                      id="deleteButton"
                      onClick={() => onDelete(currentUser)}
                    >
                      <Trash2 />
                    </button>
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
