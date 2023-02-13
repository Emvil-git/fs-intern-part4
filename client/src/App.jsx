import logo from './logo.svg';
import './App.css';
import Login from './routes/login/Login';
import Chats from './routes/chats/Chats';
import{ Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='vh-100 bg-secondary'>
    <Routes>
      {/* <Route index element={<Login/>}/> */}
      <Route index element={<Chats/>}/>
      {/* <Route path="/home" element={ <Home/> }/> */}
    </Routes>
  </div>
  );
}

export default App;
