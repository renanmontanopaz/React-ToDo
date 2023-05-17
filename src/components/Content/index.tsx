import styles from './index.module.css'
import Plus from '../../assets/mais.svg'
import {NoContent} from "../NoContent";
import {ChangeEvent, useEffect, useState} from "react";
import ToDoList from "../ToDoList";
import {Task} from "../../Model/Task.ts";
import { v4 as uuidv4 } from 'uuid';
import {api} from '../../configs/api';
export const Content = () =>{


    const [description, setDescription] = useState<string>("");

    const [tasksList, setTaksList] = useState<Task[]>([

    ]);

    const disabledButton = !description.length;
    const addTaskOnList = ()=>{
        const newTask = {
            id: uuidv4(),
            description,
            isDone: false,
        }
        setTaksList((currentValue)=>[...currentValue, newTask]);
        setDescription('',);
    }

    const removeTaskOnList = (id: string)=>{
        setTaksList((currentValue) => currentValue.filter(task => task.id !== id))
    }
    const changeStatusCheckbox = (id: string)=>{
        const xebas = tasksList.map((Task) =>{
            if (Task.id == id){
                return{
                    ...Task,
                    isDone : !Task.isDone
                }
            }
            return Task
        })
        setTaksList(xebas)
    }

    const tasksDone = tasksList.filter((Task)=> {
        return Task.isDone !== false;
    })

    useEffect(()=> {
        api.get("tasks").then((response) => setTaksList(response.data as Task[]))
    }, []);

    return(
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input}
                           type="text" placeholder="Adicione uma nova tarefa"
                           onChange={(event: ChangeEvent<HTMLInputElement>)=> setDescription(event.target.value)}
                           value={description}/>
                    <button className={styles.button}
                            onClick={addTaskOnList}
                            disabled={disabledButton}>Criar
                        <img src={Plus} alt="icone de mais"/>
                    </button>

                </article>
                <article className={styles.content_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.taks_created}>Tarefas Criadas</p>
                        <span className={styles.span_value}>{tasksList.length}</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_done}>Concluídas</p>
                        <span className={styles.span_value}>{tasksDone.length} de {tasksList.length}</span>
                    </article>
                </article>
                {tasksList.length === 0? <NoContent/> : <ToDoList onDelete={removeTaskOnList} onChangeCheckBox={changeStatusCheckbox} list={tasksList}/> }
            </main>
        </section>
    )
}