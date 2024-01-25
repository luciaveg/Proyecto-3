import { Link } from 'react-router-dom';

const Footer = () => {
    return (<footer>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/cantact">Contact Us</Link>
        </li>
    </footer>
);}; 
export default Footer;