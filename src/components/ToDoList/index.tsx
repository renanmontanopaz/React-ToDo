import trash from '../../assets/trash.svg'
import styles from './index.module.css'
import {Task} from "../../Model/Task.ts";

interface TodoList {
    list: Task[];
    onDelete: (id: string)=> void;
    onChangeCheckBox:(id: string) => void;
}
export const ToDoList = ({list, onDelete, onChangeCheckBox}: TodoList) =>{
    return(
        <section className={styles.section_container}>
            {list.map((Task)=>(
                <article key={Task.id} className={styles.content_container}>
                    <input type="checkbox"
                           id={Task.id}
                           onChange={()=> onChangeCheckBox(Task.id)}
                           defaultChecked={Task.isDone}/>
                    <p className={Task.isDone ? styles.text_scratched : styles.text}>{Task.description}</p>
                    <img className={styles.img} src={trash} alt="icone de lixeira" onClick={()=> onDelete(Task.id)}/>
                </article>
            ))}
        </section>
    )
}

export default ToDoList