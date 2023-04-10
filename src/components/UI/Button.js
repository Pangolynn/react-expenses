import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.buttonExpense} ${props.alt && styles.alternative}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
