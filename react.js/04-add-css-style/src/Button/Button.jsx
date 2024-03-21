import styles from './Button.module.css'

function Button() {
  const styles = {
      backgroundColor: "orangered",
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      padding: "1rem",
      cursor: "pointer",
  }
  return (
    /*
    // external styling css
    // <button className="button">Click me</button>
    
    // module styling css
    <button className={styles.button}>Click me</button>
    */

    // in-line styling css
    <button style={styles}>Click me</button>
  )
}

export default Button