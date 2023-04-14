import './bootstrap';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';

// import Home from './components/Home';
import App1 from './components/App1';

import Register from './components/signup/Register';
import Connecte from './components/connecte-email/Connecte';
import Pass from './components/pass.login/Pass';
ReactDOM.createRoot(document.getElementById('app')).render(
   <div>
 <BrowserRouter>
       <Routes>
       <Route path='/' element={<App1/>} />
           <Route path='/register'  element={<Register/>} /> 
           <Route path='/s-identifierJ' element={<Connecte/>}/> 
           <Route path='/pass' element={<Pass/>} /> 
           </Routes>
           </BrowserRouter>
           </div>
)

