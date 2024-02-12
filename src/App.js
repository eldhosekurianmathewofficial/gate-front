import logo from './logo.svg';
import './App.css';
import LoginSecurity from './components/LoginSecurity';
import SignupSecuritybyAdmin from './components/SignupSecuritybyAdmin';
import AdminLogin from './components/AdminLogin';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListofVisitors from './components/ListofVisitors';
import AddVisitorbySecurity from './components/AddVisitorbySecurity';
import ViewAllSecurities from './components/ViewAllSecurities';
import NavBarSec from './components/NavBarSec';
import Myvisitors from './components/Myvisitors';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<><AdminLogin/></>}/>
<Route path='/signupsecurity' element={<><NavBar/><SignupSecuritybyAdmin/></>}/>
<Route path='/loginsec' element={<><LoginSecurity/></>}/>
<Route path='/visitorslist' element={<><ListofVisitors/></>}/>
<Route path='/AddVisit' element={<><NavBarSec/><AddVisitorbySecurity/></>}/>
<Route path='/securitylist' element={<><ViewAllSecurities/></>}/>
<Route path='/myvisitors' element={<><Myvisitors/></>}/>


     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
