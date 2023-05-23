import "./Header.css";

const Header = ({ onCreate }) => {
  return (
    <>
      <header className="header__container">
        <h1 className="list__tittle__user">users</h1>
        <button className="button_create__user" onClick={() => onCreate()}>
          + create a new user
        </button>
      </header>
    </>
  );
};

export default Header;
