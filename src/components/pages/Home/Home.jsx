import UseForm from "../../UseForm/UseForm";
import Modal from "../../Modal/Modal";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../../../services/services";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import UsersList from "../../UsersList/UsersList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editUserData, setEditUserData] = useState(null);

  const LoadUsers = async () => {
    const usersData = await getUsers();
    setUsers(usersData);
  };

  const handleCreate = () => {
    setIsVisibleModal(true);
  };

  const handleCloseModal = () => {
    setEditUserData(null);
    setIsVisibleModal(false);
  };

  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await LoadUsers();
    setIsVisibleModal(false);
  };

  const handleEditUser = (event, dataUser) => {
    event.preventDefault();
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
    <div>
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
    </div>
  );
};

export default Home;
