import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Login from './screens/Login';
import Payment from './screens/Payment';
import KnowAbout from './screens/KnowAbout';
import SignUp from './screens/SignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<SignUp/>} />
          <Route exact path="/knowAboutDoc" element={<KnowAbout/>} />
          <Route exact path="/pay" element={<Payment/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
