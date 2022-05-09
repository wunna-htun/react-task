import '../App.css'
import { Link } from 'react-router-dom';
// import calender from '../assets/images/calendar.svg';
const NavBar=()=>{
    return <>
    <nav>
        
        <div className="logo">
            <img src='../images/calendar.svg' alt="cal" />
        </div>
        <div className="header">
        
            <Link to='/'>
            Notes
            </Link>
            </div>
    </nav>
    </>
}

export default NavBar;