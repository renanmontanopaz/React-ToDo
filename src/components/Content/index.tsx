import styles from './index.module.css'
import Plus from '../../assets/mais.svg'
import {NoContent} from "../NoContent";
import {useState} from "react";
import ToDoList from "../ToDoList";

export const Content = () =>{

    const [todoList] = useState([
        {
            id:'1',
            description:'Limpar meu quarto',
            isDone: false
        },
        {
            id:'2',
            description:'Fazer a lição de ingles',
            isDone: false
        },
        {
            id:'3',
            description:'pagar cartão de crédito',
            isDone: false
        }
    ]);
    /*const array = [
        {
            id:'',
            description:'Fazer a lição de ingles',
            isDone: false
        },
        {
            id:'',
            description:'',
            isDone: false
        }
    ];*/

    return(
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa"/>
                    <button className={styles.button}>Criar
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
                {todoList.length === 0? <NoContent/> : <ToDoList/> }
            </main>
        </section>
    )
}