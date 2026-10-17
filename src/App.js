import './App.css';
import NavBar from './components/partials/NavBar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
       <NavBar/> 
      <div className="container mt-2">
        <Users/>
    </div>
    </div>
  );
}

export default App;
