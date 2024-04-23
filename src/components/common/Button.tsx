
interface PropsType {
  type?: "primary" | "secondary" | "disabled";
  onClick?: () => void;
  children: JSX.Element | string | number
}

const Button: React.FC<PropsType> = ({ type = "primary", onClick, children }) => {
  return (
    <button onClick={onClick} className={`${type ? "btn-" + type : "btn"}`}>
      {children}
    </button>
  );
};

export default Button;