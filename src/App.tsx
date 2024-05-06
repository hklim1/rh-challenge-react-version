import { useState } from "react";
import "./App.scss";
import { PostsScreen } from "./screens/PostsScreen";
import { UsersScreen } from "./screens/UsersScreen";

function App() {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowPosts(!showPosts)}>Show Posts</button>
      {showPosts ? <UsersScreen /> : <PostsScreen />}
    </div>
  );
}

export default App;
