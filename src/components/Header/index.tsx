import logo from '../../assets/logo.svg'
import styles from './index.module.css'
import {Link} from "react-router-dom";
export const Header = () =>{
    return(
        <header className={styles.header}>
            <Link to="/"><img className={styles.img} src={logo} alt="Logo principal do sistema" /></Link>
        </header>
    )
}