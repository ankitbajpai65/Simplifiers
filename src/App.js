import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Todo from './Components/Todo';
import News from './Components/News';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="home container-fluid">
        <div className="row">
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/my_notes" element={<Todo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
