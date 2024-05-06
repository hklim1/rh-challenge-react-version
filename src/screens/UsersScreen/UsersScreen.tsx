import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Navbar } from "../../components/Navbar/Navbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Table, User } from "../../components/Table/Table";
import { Filter } from "../../components/Filter/Filter";
import "./UsersScreen.scss";

const localData = [
  {
    id: 1,
    first_name: "Joshua",
    last_name: "Williams",
    email: "josh@williams.com",
  },
  {
    id: 2,
    first_name: "George",
    last_name: "Clooney",
    email: "thecloon@gmail.com",
  },
  {
    id: 3,
    first_name: "Heather",
    last_name: "Lim",
    email: "hklim@gmail.com",
  },
  {
    id: 4,
    first_name: "Marj",
    last_name: "Hurta",
    email: "marj@nbc.com",
  },
  {
    id: 5,
    first_name: "Jackson",
    last_name: "Pollack",
    email: "jpoll@art.com",
  },
  {
    id: 6,
    first_name: "Chandler",
    last_name: "Handler",
    email: "bestdog@vetmed.com",
  },
  {
    id: 7,
    first_name: "Angelina",
    last_name: "Jolie",
    email: "alist@actress.com",
  },
  {
    id: 8,
    first_name: "Kwabena",
    last_name: "Anko",
    email: "kankobb@edu.com",
  },
  {
    id: 9,
    first_name: "Randy",
    last_name: "Rice",
    email: "randy@gmail.com.com",
  },
  {
    id: 10,
    first_name: "Jason",
    last_name: "Lu",
    email: "j1992@yahoo.com",
  },
  {
    id: 11,
    first_name: "Nathan",
    last_name: "Fillion",
    email: "rookie@lapd.com",
  },
  {
    id: 12,
    first_name: "Kendrick",
    last_name: "Lamar",
    email: "musician@aol.com",
  },
  {
    id: 13,
    first_name: "Barack",
    last_name: "Obama",
    email: "44th@prez.gov",
  },
  {
    id: 14,
    first_name: "Troy",
    last_name: "Barnes",
    email: "troy@gmail.com",
  },
  {
    id: 15,
    first_name: "Rhonda",
    last_name: "Stokes",
    email: "rhonda@comcast.com",
  },
  {
    id: 16,
    first_name: "Rio",
    last_name: "Pitbull",
    email: "goodboy@gmail.com",
  },
  {
    id: 17,
    first_name: "Nicole",
    last_name: "Cibuzar",
    email: "nicole@cibuzar.com",
  },
  {
    id: 18,
    first_name: "Timothy",
    last_name: "Chakonas",
    email: "tjchako0823@yahoo.com",
  },
  {
    id: 19,
    first_name: "Queen",
    last_name: "Elizabeth",
    email: "royalty2@uk.co",
  },
  {
    id: 20,
    first_name: "Miranda",
    last_name: "Rickhoff",
    email: "miranda.ricks11@yahoo.com",
  },
];

export const UsersScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [userData, setUserData] = useState<User[]>(localData);

  //   If Laravel backend is locally hosted as well, will pull real data from DB with code below
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/users")
  //     .then((response) => response.json())
  //     .then((json) => setUserData(json));
  // }, []);

  return (
    <div id="usersScreenBody">
      <h1>USER LIST</h1>
      <SearchBar
        onChange={(newSearch) => setSearchTerm(newSearch.toLowerCase())}
      />
      <Filter onChange={setFilters} />
      <Table data={userData} searchTerm={searchTerm} filters={filters} />
    </div>
  );
};
