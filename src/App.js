import './App.css';
import User from './components/user/User'
import QnEnter from './components/qnEnter/QnEnter'
import HomeAdmin from './components/homeAdmin/HomeAdmin'
import HomeTeachers from './components/homeTeachers/HomeTeachers'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import QnGenerate from './components/qnGenerate/QnGenerate'
import Questions from './components/questions/Questions'
import Qp from './components/qp/Qp';

function App() {
  return (
    // <HomeTeachers/>
    <Router>
       <div className="App">
         <Routes>
             <Route exact path = '/' element={<Login/>} />
             <Route path = '/HomeAdmin'  element={<HomeAdmin/>} />
             <Route path = '/HomeTeachers/:id' element = {<HomeTeachers/>}/>
             <Route path = '/create' element = {<User/>}/>
             <Route path = '/question-enter/:code' element = {<QnEnter/>} />
             <Route path = '/question-generate/:code' element = {<QnGenerate/>}/>
             <Route path = '/questions/:code' element = {<Questions/>}/>
             <Route path = '/question-paper/:code/:marks' element = {<Qp/>}></Route>

           </Routes>
       </div>
    </Router>
    
  );
}

export default App;
