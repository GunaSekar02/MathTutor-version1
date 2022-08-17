import Navbar from './components/Navbar';
import Qdifferentiation from './components/Qdifferentiation';
import './App.css';
import Quit from './components/Quit'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Navigate,
} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        {/* <Switch> */}
          <Route exact path='/' element={<Navigate to ='/MCQ'/>}/>
          <Route exact path="/MCQ" element={<Qdifferentiation/>}/>
          <Route path="/Quit" element={<Quit/>}></Route>
      {/* </Switch */}
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
