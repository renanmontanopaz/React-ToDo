import trash from '../../assets/trash.svg'
import styles from './index.module.css'
const ToDoList = () =>{
    return(
        <section>
            <article className={styles.content_container}>
                <input type="checkbox" name="" id=""/>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                <img src={trash} alt="icone de lixeira"/>
            </article>
        </section>
    )
}

export default ToDoList