import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className={styles.navBar}>
    <button className={styles.hamburgerButton}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </button>
    <ul>
      <li><NavLink  className={({ isActive }) => isActive ? styles.linkActive : styles.link}
        to="/">Home</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link}
        to="/favorite">Favorite</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link}
        to="/about">About</NavLink></li>
      
    </ul>
  </nav>
);

export default NavBar;