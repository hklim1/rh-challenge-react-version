import { useState } from "react";
import "./App.scss";
import { PostsScreen } from "./screens/PostsScreen";
import { UsersScreen } from "./screens/UsersScreen/UsersScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={() => setShowPosts(!showPosts)}>Show Posts</button> */}
      {/* {showPosts ? <UsersScreen /> : <PostsScreen />} */}
      <UsersScreen />
      <Footer />
    </div>
  );
}

export default App;
