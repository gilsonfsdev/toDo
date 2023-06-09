import styles from './NoTasks.module.css';
// image
import empty from '../assets/empty.svg';


const NoTasks = () => {
  return (
    <div className={styles.container}>
      <img src={empty} alt=''/>
      <div>
        <p className={styles.strong}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}

export default NoTasks