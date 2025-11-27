import { Link, useNavigate } from "react-router-dom";

const Header = ({fetchData}) => {
    const navigate=useNavigate();
    return <div className="header">
        <div className="logo-container" onClick={()=>{
           fetchData();
           navigate('/')
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbl6XJl1KiR1Q0yZXAeY-drftVYEdCw1NKGw&s" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li><a href='/About'>About</a></li>
                <li><Link to='/Contact'>Contactus</Link></li>
                <li>cart</li>
            </ul>
        </div>
    </div>
}
export default Header;