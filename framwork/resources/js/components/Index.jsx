import ReactDOM  from 'react-dom/client';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Signup from './signup/Signup';
ReactDOM.createRoot(document.getElementById('Index')).render(
    <>
    <BrowserRouter>
       <Routes>
           <Route path='singup' exact element={<Signup/>} /> 
           </Routes>
           </BrowserRouter>
           </>
   
   
   );