import styles from './index.module.css'
import Home from '../../assets/home.svg'
import Home2 from '../../assets/img_1.png'
import {useEffect, useState} from "react";
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
                <a href="/To-Do"><h1>ToDo List</h1></a>
                {width <= breakpoint ?
                    <img className={styles.img_home} src={Home2} alt="Home2" />
                 :
                    <img className={styles.img_home2} src={Home} alt="Home" />
                }
            </div>
        </section>
    )
}