Реализуй фичу: Username/password authentication with JWT

## Что нужно сделать
Добавь регистрацию и логин по username/password с безопасным хранением паролей через bcrypt. После успешного логина выдавай JWT access token для доступа к защищённым API.

## Файлы которые нужно создать / изменить
- `backend/app/models/user.py` — модель пользователя
- `backend/app/schemas/auth.py` — DTO для auth endpoint
- `backend/app/services/auth_service.py` — hashing, verify, token issue
- `backend/app/api/v1/auth.py` — endpoints register/login/me
- `backend/app/core/security.py` — JWT helpers и dependency
- `backend/alembic/versions/*_create_users_table.py` — миграция users
- `frontend/src/features/auth/*` — формы регистрации и логина
- `frontend/src/api/auth.ts` — клиентские вызовы auth API

## Входные данные / интерфейс
`POST /api/v1/auth/register`, `POST /api/v1/auth/login`, `GET /api/v1/auth/me`. Frontend хранит token в памяти/secure storage и отправляет в Authorization header.

## Ожидаемый результат
Пользователь может зарегистрироваться, авторизоваться и получить доступ к защищённым endpoint.

## Зависимости
- `TASK_01_project_bootstrap.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
