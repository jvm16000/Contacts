import logo from './logo.svg';
import './App.css';
import UserList from './features/users/UserList';
import { Routes, Route } from 'react-router-dom';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList/>} exact/>
        <Route path='/add-user' element={<AddUser/>} exact/>
        <Route path='/edit-user/:id' element={<EditUser/>} exact/>
      </Routes>
       
    </div>
  );
}

export default App;
