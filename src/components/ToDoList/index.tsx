import trash from '../../assets/trash.svg'
import styles from './index.module.css'
import {useToDoContext} from "../../hooks/UseToDoContext";

interface TodoListProps {
    onDelete: (id: string)=> void;
    onChangeCheckBox:(id: string) => void;
}
export const ToDoList = ({onDelete, onChangeCheckBox}: TodoListProps) =>{
    const { taskListState } = useToDoContext();
    return(
        <section className={styles.section_container}>
            {taskListState.map((task)=>(
                <article key={task.id} className={styles.content_container}>
                    <input type="checkbox"
                           id={task.id}
                           onChange={()=> onChangeCheckBox(task.id)}
                           defaultChecked={task.isDone}/>
                    <p className={task.isDone ? styles.text_scratched : styles.text}>{task.description}</p>
                    <img className={styles.img} src={trash} alt="icone de lixeira" onClick={()=> onDelete(task.id)}/>
                </article>
            ))}
        </section>
    )
}

export default ToDoList