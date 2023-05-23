import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "./services/services";
import UseForm from "./components/UseForm/UseForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editUserData, setEditUserData] = useState(null);

  const LoadUsers = async () => {
    const usersData = await getUsers();
    setUsers(usersData);
  };

  const handleCloseModal = () => {
    setEditUserData(null);
    setIsVisibleModal(false);
  };

  const handleCreate = () => {
    setIsVisibleModal(true);
  };

  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await LoadUsers();
    setIsVisibleModal(false);
  };

  const handleEditUser = (dataUser) => {
    setIsVisibleModal(true);
    setEditUserData(dataUser);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    await LoadUsers();
  };

  useEffect(() => {
    LoadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate} />

      <UsersList
        users={users}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />

      <Modal isVisible={isVisibleModal}>
        <UseForm
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={editUserData}
        />
      </Modal>
    </>
  );
};

export default App;
