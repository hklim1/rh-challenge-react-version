import "./App.scss";
import { UsersScreen } from "./screens/UsersScreen/UsersScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UsersScreen />
      <Footer />
    </div>
  );
}

export default App;
