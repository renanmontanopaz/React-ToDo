import styles from './index.module.css'
import Plus from '../../assets/mais.svg'
import {NoContent} from "../NoContent";
import {ChangeEvent, useState} from "react";
import ToDoList from "../ToDoList";
import {Task} from "../../Model/Task.ts";
import { v4 as uuidv4 } from 'uuid';

export const Content = () =>{

    const [description, setDescription] = useState<string>("");

    const [tasksList, setTaksList] = useState<Task[]>([
        {
            id:'1',
            description:'Limpar meu quarto',
            isDone: false
        },
        {
            id: '2',
            description:'Fazer a lição de ingles',
            isDone: false
        },
        {
            id:'3',
            description:'pagar cartão de crédito',
            isDone: false
        }
    ]);

    const addTaskOnList = ()=>{
        const newTask = {
            id: uuidv4(),
            description,
            isDone: false,
        }
        setTaksList((currentValue)=>[...currentValue, newTask]);
    }

    const removeTaskOnList = (id: string)=>{
        setTaksList((currentValue) => currentValue.filter(task => task.id !== id))
    }
    return(
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" onChange={(event: ChangeEvent<HTMLInputElement>)=> setDescription(event.target.value)}/>
                    <button className={styles.button} onClick={addTaskOnList}>Criar
                        <img src={Plus} alt="icone de mais"/>
                    </button>

                </article>
                <article className={styles.content_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.taks_created}>Tarefas Criadas</p>
                        <span className={styles.span_value}>0</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_done}>Concluídas</p>
                        <span className={styles.span_value}>0</span>
                    </article>
                </article>
                {tasksList.length === 0? <NoContent/> : <ToDoList onDelete={removeTaskOnList} list={tasksList} /> }
            </main>
        </section>
    )
}