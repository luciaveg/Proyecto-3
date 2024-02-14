import { CenterFocusStrong } from '@mui/icons-material';
import './Logo.css'
import image from '../Constants/Constants.js';


const Logo = () => {

    return (
        <div className="logo" aria-posinset={CenterFocusStrong}>
            <img src={image}alt="Foto del LOGO de la App"/>
        </div>
        
    )
}
export default Logo;