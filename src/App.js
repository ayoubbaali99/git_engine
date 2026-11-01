import './App.css';
import NavBar from './components/partials/NavBar';
import Users from './components/users/Users';
import UserItem from './components/users/UserItem';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams} from 'react-router-dom';

function UserItemWrapper() {
    const { login } = useParams();

    return <UserItem  key={login} login={login} />;
}

function App() {
  return (
    <Router>

    <div className="App">
       <NavBar/> 
      <div className="container mt-2">
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:login" element={<UserItemWrapper/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </div>

    </Router>
  );
}

export default App;
