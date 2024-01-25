import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
    <footer>
      <ul className="ulFooter">
          <Link to="/about">About Us</Link>
          <Link to="/cantact">Contact Us</Link>
      </ul>
    </footer>
);}; 
export default Footer;