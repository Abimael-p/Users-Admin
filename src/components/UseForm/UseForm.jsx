import { useForm } from "react-hook-form";
import "./UseForm.css";

const UseForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };

  return (
    <form className="form__users" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="tittle__form__user">
        {initialData ? "Edit user" : "new user"}
      </h2>
      <button
        type="button"
        className="button__closing__form"
        onClick={() => onClose()}
      >
        ✖
      </button>
      <div className="container__form__input">
        <div className="form__container__users__input">
          <label htmlFor="firstNameId" className="form__user__label">
            First Name:
          </label>
          <input
            type="text"
            placeholder="Juan"
            id="firstNameId"
            {...register("first_name")}
          />
        </div>
        <div className="form__container__users__input">
          <label htmlFor="lastNameId" className="form__user__label">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Duarte"
            id="lastNameId"
            {...register("last_name")}
          />
        </div>
        <div className="form__container__users__input">
          <label htmlFor="emailId" className="form__user__label">
            Email:
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            id="emailId"
            {...register("email")}
          />
        </div>
        <div className="form__container__users__input">
          <label htmlFor="passwordId" className="form__user__label">
            Password:
          </label>
          <input
            type="password"
            placeholder="xxxxx"
            id="passwordId"
            {...register("password")}
          />
        </div>
        <div className="form__container__users__input">
          <label htmlFor="birthdayId" className="form__user__label">
            Birthday:
          </label>
          <input
            type="date"
            placeholder="02/05/2021"
            id="birthdayId"
            {...register("birthday")}
          />
        </div>
        <button className="button__add__user" type="submit">
          {initialData ? "save changes" : "add new user"}
        </button>
      </div>
    </form>
  );
};

export default UseForm;
