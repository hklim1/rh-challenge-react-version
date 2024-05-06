import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "../App.scss";
import { Navbar } from "../components/Navbar/Navbar";
// import { SearchBar } from "../components/SearchBar/SearchBar.tsx";
import { Table, User } from "../components/Table/Table";
import { Filter } from "../components/Filter/Filter";

export const PostsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts")
      .then((response) => response.json())
      .then((json) => setUserData(json));
  }, []);

  console.log(userData);

  return <div>hello world</div>;
};
