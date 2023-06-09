import styles from '../components/Header.module.css';

// images
import todo from '../assets/todo.svg';
import logo from '../assets/logo.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="" />
        <img src={todo} alt=""/>
      </div>
    </header>
  )
}

export default Header