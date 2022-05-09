import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'
import Create from './components/create'
import GetAll from './components/getAll'
import Update from './components/update'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (

    <>

      <Router>
        <NavBar />

        <Routes>

          <Route path='/' element={<>
            <Create />
            <div className="main">
              <GetAll />
            </div>
          </>
          }>
          </Route>

          <Route path='/update' element={
            <Update />
          }>

          </Route>




        </Routes>

        <FooterBar />

      </Router>


    </>
  );
}

export default App;
