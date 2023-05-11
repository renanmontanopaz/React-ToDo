import styles from './style.module.css'
import clipboard from '../../assets/clipboard.svg'
export const NoContent = () =>{
    return(
        <section className={styles.section_container}>
            <img src={clipboard} alt="icone de tarefa"/>
            <p className={styles.text}>Você ainda não tem tarefas cadastradas,
                <strong> Crie tarefas se organize seus itens a fazer</strong>
            </p>
        </section>
    )
}