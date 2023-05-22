import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Users from './Components/Users';
import Payoutdetails from './Components/Payoutdetails';
import Login from './Components/Login';
import Forgetpassword from './Components/Forgetpassword';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/" element={< Sidebar />} />
        <Route exact path="/Users" element={< Users />} />
        <Route exact path="/PayoutDetails" element={< Payoutdetails />} />
        <Route exact path="/Login" element={< Login />} />
        <Route exact path="/Forgetpassword" element={< Forgetpassword />} />
        <Route exact path="/Register" element={< Register />} />
      </Routes>
    </div>
  );
}

export default App;
