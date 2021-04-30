import logo from './logo.svg';
import './App.css';
import SuperHeroList from './Components/SuperHeroList.jsx';
import Count from './Components/Count.jsx';
import EmployeeList from './Components/Employee/EmployeeList.jsx'
import AddSuperHero from './Components/Forms/AddSuperHero';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
     {/* <SuperHeroList/> */}
     {/* <Count/> */}
<EmployeeList/>
{/* <AddSuperHero/> */}
    </div>
    </Router>
    
  );
}

export default App;
