import { Link } from "react-router-dom";
import "boxicons";
import "./UsersList.css";

const UsersList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length)
    return (
      <div className="user__loader">
        <p>without users</p>
      </div>
    );

  const handleDeleteUser = (event, userId) => {
    event.preventDefault();
    onDeleteUser(userId);
  };

  return (
    <div className="user__list">
      {users.map((user) => {
        return (
          <div className="container__user" key={user.id}>
            <Link className="link_user_id" to={`/user/${user.id}`}>
              <p className="tittle__name__user">
                {user.first_name} {user.last_name}
              </p>
              <hr />
              <p>
                <b>Email: </b>
                {user.email}
              </p>
              <p>
                <b>Birthday: </b>
                <box-icon name="gift"></box-icon>
                {user.birthday.slice(0, 10)}
              </p>
              <hr />
              <div className="edit__container">
                <button
                  className="button__delete"
                  onClick={(event) => handleDeleteUser(event, user.id)}
                >
                  <box-icon name="comment-x"></box-icon>
                </button>
                <button
                  onClick={(event) => onEditUser(event, user)}
                  className="button__edit"
                >
                  <box-icon name="edit-alt"></box-icon>
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
