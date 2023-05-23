import "./UsersList.css";

const UsersList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length)
    return (
      <div className="user__loader">
        <p>without users</p>
      </div>
    );

  const handleDeleteUser = (userId) => {
    onDeleteUser(userId);
  };

  return (
    <div className="user__list">
      {users.map((user) => {
        return (
          <div className="container__user" key={user.id}>
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
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/gift--v1.png"
                alt="gift--v1"
              />
              {user.birthday}
            </p>
            <hr />
            <div className="edit__container">
              <button
                className="button__delete"
                onClick={() => handleDeleteUser(user.id)}
              >
                X
              </button>
              <button onClick={() => onEditUser(user)} className="button__edit">
                📑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
