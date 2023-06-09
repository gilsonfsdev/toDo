import styles from './Task.module.css';
import { Task } from './ContentTasks';
import { Trash } from 'phosphor-react';
import {useState} from 'react';


interface TaskProps extends Task {
  content: string;
  onDeleteTask: (task: number) => void;
  handleCheckboxChange: (taskId: number) => void;
}

const Tarefa = ({id, content, onDeleteTask, handleCheckboxChange}:TaskProps) => {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteComment () {
    setIsChecked(!isChecked);
    onDeleteTask(id);
  }

  function handleIsDone () {
      handleCheckboxChange(id)
  }

  return (
    <article className={styles.article}>
      <label className={styles.wrapper} htmlFor={`task-${id}`} onChange={handleIsDone}>
        <input type="checkbox" id={`task-${id}`} className={styles.checkbox}/>
        <p className={styles['checkbox-label']}>{content}</p>
      </label>
      
      <button className={styles.trash} onClick={handleDeleteComment} title='Deletar'>
        <Trash size={20}/>
      </button>
    </article>
  )
}

export default Tarefa;