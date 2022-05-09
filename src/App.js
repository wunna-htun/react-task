import logo from './logo.svg';
import './App.css';
import  NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'
import Create from './components/create'
import GetAll from './components/getAll'

function App() {
  return (
    
    <>
    <NavBar/>
    <Create/>

    <div className="main">

      <GetAll/>
      
    </div>
    <FooterBar/>
    
    </>
  );
}

export default App;
