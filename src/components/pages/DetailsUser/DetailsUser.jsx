import { Link, useParams } from "react-router-dom";
import { getUsersId, updateUser } from "../../../services/services";
import { useEffect, useState } from "react";
import iconUser from "../../../assets/icon/6061bd47-2818-4f2b-b04a-5a9ddb6f6467.png";
import "boxicons";
import "./DetailsUser.css";
import { useForm } from "react-hook-form";

const DetailsUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { register, handleSubmit, watch, setValue } = useForm();
  const birthday = watch("birthday")?.slice(0, 10);

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await getUsersId(id);
      setUser(usersData);
      setValue("first_name", usersData.first_name);
      setValue("last_name", usersData.last_name);
      setValue("email", usersData.email);
      setValue("password", usersData.password);
      setValue("birthday", usersData.birthday);
    };

    loadUsers();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateUser(id, data);
      window.location.reload("/")
    } catch (error) {
      console.log("Error updating user", error);
    }
  };

  return (
    <form className="form__user__id" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/">
        <button className="btn_back">
          <box-icon name="left-arrow-alt"></box-icon>
        </button>
      </Link>
      <div className="container_img">
        <img src={iconUser} alt="icon" />
      </div>
      <p className="id_user">
        <b>ID:</b> {user.id}
      </p>

      <div className="container_details_user">
        <div className="name_user">
          <div>
            <h3>First Name:</h3>
            <input type="text" {...register("first_name")} />
          </div>
          <div>
            <h3>Last Name</h3>
            <input type="text" {...register("last_name")} />
          </div>
        </div>
        <div className="container_date_and_email">
          <div>
            <h3>Email:</h3>
            <input type="email" {...register("email")} />
          </div>
          <div>
            <h3>Password</h3>
            <input type="password" {...register("password")} />
          </div>
        </div>
        <div>
          <h3>Birthday</h3>
          <input type="date" {...register("birthday")} />
        </div>
        <p>{birthday}</p>
      </div>

      <div className="container_btn_update_user">
        <button type="submit">Update User</button>
      </div>
    </form>
  );
};

export default DetailsUser;
