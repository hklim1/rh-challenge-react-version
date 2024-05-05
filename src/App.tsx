import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';

const users = [{
  firstName: "Heather",
  lastName: "Lim",
  email: "heatherlim@gmail.com"
},
{
  firstName: "Patrick",
  lastName: "Guo",
  email: "Patrickg@gmail.com"
},
{
  firstName: "Kwabena",
  lastName: "Banana",
  email: "kwBanana@gmail.com"
}
]

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;
