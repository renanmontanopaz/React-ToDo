import styles from './index.module.css'
import Home from '../../assets/home.svg'
import Home2 from '../../assets/img_1.png'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export const HomeToDo = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 500;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return(
        <section className={styles.section_container}>
            <div className={styles.div_main}>
                <Link to="/To-Do"><h1>To Do List</h1></Link>
                {width <= breakpoint ?
                    <img className={styles.img_home} src={Home2} alt="Home2" />
                 :
                    <img className={styles.img_home2} src={Home} alt="Home" />
                }
            </div>
        </section>
    )
}