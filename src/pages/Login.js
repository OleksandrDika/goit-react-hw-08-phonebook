const Login = () => {
  return (
    <div>
      <form>
        <label>
          Логин: <input type="text" name="login" />
        </label>
        <label>
          Пароль: <input type="text" name="password" />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
