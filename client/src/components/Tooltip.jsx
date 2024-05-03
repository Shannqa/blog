import styles from "../styles/Tooltip.module.css";

function Tooltip({ message }) {
  return (
    <div className={styles.active}>
      <p>{message}</p>
    </div>
  );
}

export default Tooltip;
