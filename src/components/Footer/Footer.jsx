import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
    <footer>
      <ul className="ulFooter">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/cantact">Contact Us</Link>
          </li>
      </ul>
    </footer>
);}; 
export default Footer;