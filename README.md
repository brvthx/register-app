# Register App

Учебный проект на Express: форма регистрации с обработкой POST-запроса.

## Стек

- Node.js
- Express

## Установка и запуск

```bash
npm install
npm start
```

Открыть в браузере: http://localhost:3000/register

## Реализовано

- Форма регистрации с полями: логин, пароль, ФИО, телефон, email, город
- Парсинг данных формы через `express.urlencoded()`
- Вывод всех полей через `req.body` после отправки
- Кнопка «Очистить форму» (type="reset")

## Структура

```
app.js          — точка входа, роуты GET/POST /register
package.json    — зависимости и скрипты
.gitignore      — исключения (node_modules)
```