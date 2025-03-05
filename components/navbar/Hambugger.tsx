const Hambugger = ({
  styles,
  action,
  toggle,
}: {
  toggle: boolean;
  styles: any;
  action: () => void;
}) => {
  return (
    <div
      onClick={action}
      className={toggle ? styles.open : styles.ham}
      id="navbar"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hambugger;
