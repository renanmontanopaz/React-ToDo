import logo from '../../assets/logo.svg'
import styles from './index.module.css'
export const Header = () =>{
    return(
        <header className={styles.header}>
            <a href="/"><img className={styles.img} src={logo} alt="Logo principal do sistema" /></a>
        </header>
    )
}