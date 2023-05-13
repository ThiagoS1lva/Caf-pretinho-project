import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Cardápio</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}
