import styles from './App.module.css'
import ContentTasks from './components/ContentTasks';
import Header from './components/Header';
function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ContentTasks />
        </div>
      </div>
    </>
  )
}

export default App
