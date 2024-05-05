import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { Table } from "./components/Table";
import { Filter } from "./components/Filter";

const users = [
  {
    firstName: "Heather",
    lastName: "Lim",
    email: "heatherlim@gmail.com",
  },
  {
    firstName: "Patrick",
    lastName: "Guo",
    email: "Patrickg@gmail.com",
  },
  {
    firstName: "Kwabena",
    lastName: "Banana",
    email: "kwBanana@gmail.com",
  },
  {
    firstName: "XyZ",
    lastName: "GhI",
    email: "lbco@puf.der",
  },
];

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar
        onChange={(newSearch) => setSearchTerm(newSearch.toLowerCase())}
      />
      <Filter onChange={setFilters} />
      <Table data={users} searchTerm={searchTerm} filters={filters} />
    </div>
  );
}

export default App;
