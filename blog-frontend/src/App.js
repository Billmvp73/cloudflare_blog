import { Router, Link } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'
import Create from './components/create'

const Main = ({ children }) => (
  <div>
    <h1>Welcome to this blog!</h1>
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
    </ul>
    <hr />
    {children}
  </div>
)

function App() {
  return (
    <Router>
      <Main path="/">
        <Create path='/create'/>
        <Posts path="/posts" />
        <Post path="/posts/:id" />
      </Main>
    </Router>
  );
}

export default App;