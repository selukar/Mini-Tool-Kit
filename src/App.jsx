
import './App.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todolist from './components/todolist/Todolist';
import Calculator from './components/calculator/Calculator'
import Notepad from './components/notepad/notepad';
import Home from './Home'


function App () {
  return(
    <div>
      <Router>
        <Routes>
          
            <Route path="/" element = {<Home/>} />
            <Route path="/todolist" element ={<Todolist/>} />
            <Route path ="/calculator" element ={<Calculator/>}/>
            <Route path="/notepad" element={<Notepad/>}/>
         
        </Routes>
      </Router>
       
      </div>
  );
}

export default App;

