const express = require("express");
const app = express();

// Мидлвар для парсинга данных из HTML-форм
app.use(express.urlencoded({ extended: true }));

// ---------- GET /register — показываем форму ----------
app.get("/register", (req, res) => {
  res.send(`
    <form method="POST" action="/register">
      <input name="login" placeholder="Логин"><br>
      <input name="password" type="password" placeholder="Пароль"><br>
      <input name="fullname" placeholder="ФИО"><br>
      <input name="phone" placeholder="Телефон"><br>
      <input name="email" placeholder="Email"><br>
      <input name="city" placeholder="Город"><br>
      <button type="submit">Создать пользователя</button>
      <button type="reset">Очистить форму</button>
    </form>
  `);
});

// ---------- POST /register — обрабатываем форму ----------
app.post("/register", (req, res) => {
  const { login, password, fullname, phone, email, city } = req.body;

  res.send(`
    <h2>Пользователь зарегистрирован</h2>
    <ul>
      <li>Логин: ${login}</li>
      <li>Пароль: ${password}</li>
      <li>ФИО: ${fullname}</li>
      <li>Телефон: ${phone}</li>
      <li>Email: ${email}</li>
      <li>Город: ${city}</li>
    </ul>
  `);
});

// ---------- Запуск сервера ----------
app.listen(3000, () => {
  console.log("Сервер запущен: http://localhost:3000/register");
});