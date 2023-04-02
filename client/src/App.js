import './App.css';
import {Routes,Route} from 'react-router-dom'
import UserDetails from './pages/userdata.jsx'
import Reguser from './pages/Reguser.jsx'
import Viewuser from './pages/Viewuser.jsx'
function App() {

  return (
      <>
      <Routes>
        <Route path="/" element={<UserDetails />}/>
        <Route path="/reg" element={<Reguser/>}/>
        <Route path="/view" element={<Viewuser/>}/>
      </Routes>
      </>
  );
}

export default App;
