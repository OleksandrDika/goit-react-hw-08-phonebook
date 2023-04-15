const Register = () => {
  return (
    <div>
      <form>
        <label>
          Электронная почта: <input type="text" name="mail" />
        </label>
        <label>
          Логин: <input type="text" name="login" />
        </label>
        <label>
          Пароль: <input type="text" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
