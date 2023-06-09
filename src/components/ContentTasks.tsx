import styles from './ContentTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';

// component
import Tarefa from './Task';
import NoTasks from './NoTasks';

export interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

const ContentTasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [howManyTasks, setHowManyTasks] = useState(0);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);


  // Armazena o texto do input no estado newTaskText
  function handleCreateNewTaskText (event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  // Cria uma nova task
  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();
    
    const newTask:Task = {
      id: Math.random(),
      content: newTaskText,
      isDone: false,
    }

    setTasks([...tasks,newTask]);
    setNewTaskText('');
  }

  // Deleta uma task
  function onDeleteTask (taskToDelete:number) {
      const taskWithoutDeletedOne = tasks.filter( task => {
        return task.id != taskToDelete;
      });

      setTasks(taskWithoutDeletedOne);
  }

  // Altera a propriedade isDone da task e atualiza as tasks com a nova task
  function handleCheckboxChange(taskId: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  // monitora as tasks para atualizar quantas existem e quantas estão selecionadas
  useEffect(( ) => {
    setHowManyTasks(tasks.length);

    const selected = tasks.filter((task) => task.isDone);
    setSelectedTasks(selected);
  }, [tasks])
  

  return (
    <>
      <form className={styles.box} onSubmit={handleCreateNewTask}>
        <input  
          className={styles.input} 
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleCreateNewTaskText}
          required
        />
        <button type='submit' className={styles.buttonsubmit}>
          Criar
          <span>
            <PlusCircle />
          </span>
        </button>
      </form>

      <main>  
        <header className={styles.header}>
          <p>Tarefas criadas <span>{howManyTasks} </span></p>
          {howManyTasks > 0 ? 
          (<p>Concluídas <span>{selectedTasks.length}</span> de <span>{howManyTasks}</span></p>) 
          :(<span>{howManyTasks}</span>) }
        </header>
          {tasks.length > 0 ? tasks.map((task) => {
            return (
              <Tarefa 
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={onDeleteTask}
                handleCheckboxChange={handleCheckboxChange}
              />
            )
          }): 
            <NoTasks/>
          }
      </main>
    </>
  )
}

export default ContentTasks