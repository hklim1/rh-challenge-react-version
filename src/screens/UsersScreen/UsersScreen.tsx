import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Navbar } from "../../components/Navbar/Navbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Table, User } from "../../components/Table";
import { Filter } from "../../components/Filter";
import "./UsersScreen.scss";

const localData = [
  {
    id: 1,
    first_name: "LocalHost",
    last_name: "Offline",
    email: "need@8000.com",
  },
  {
    id: 2,
    first_name: "george",
    last_name: "clooney",
    email: "thecloon@gmail.com",
  },
  {
    id: 3,
    first_name: "heather",
    last_name: "lim",
    email: "hklim@gmail.com",
  },
  {
    id: 4,
    first_name: "marj",
    last_name: "simpson",
    email: "marj@nbc.com",
  },
  {
    id: 5,
    first_name: "Jackson",
    last_name: "Pollack",
    email: "jbird@art.com",
  },
  {
    id: 6,
    first_name: "Chandler",
    last_name: "Handler",
    email: "bestdog@ever.com",
  },
  {
    id: 7,
    first_name: "angelina",
    last_name: "Jolie",
    email: "alist@actress.com",
  },
  {
    id: 8,
    first_name: "Kwabena",
    last_name: "Anko",
    email: "best@friend.com",
  },
  {
    id: 9,
    first_name: "randy",
    last_name: "rice",
    email: "randy@rice.com",
  },
  {
    id: 10,
    first_name: "Jason",
    last_name: "Lu",
    email: "j1992@yahoo.com",
  },
];
export const UsersScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [userData, setUserData] = useState<User[]>(localData);

  //   If Laravel backend is locally hosted as well, will pull real data from DB
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((json) => setUserData(json));
  }, []);

  return (
    <div id="usersScreenBody">
      <SearchBar
        onChange={(newSearch) => setSearchTerm(newSearch.toLowerCase())}
      />
      <Filter onChange={setFilters} />
      <Table data={userData} searchTerm={searchTerm} filters={filters} />
    </div>
  );
};
