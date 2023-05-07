import css from './button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <div className={ css.box } onClick={ onClick }>
      { children }
    </div>
  );
};

export default Button;
