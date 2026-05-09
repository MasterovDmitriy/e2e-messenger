Реализуй фичу: Private 1-to-1 chats lifecycle

## Что нужно сделать
Реализуй создание и получение личных чатов между двумя пользователями. Для каждой пары пользователей должен существовать один уникальный чат, который можно открыть повторно.

## Файлы которые нужно создать / изменить
- `backend/app/models/chat.py` — модели chat и chat_participant
- `backend/app/schemas/chat.py` — DTO чатов
- `backend/app/services/chat_service.py` — create/get/list чатов
- `backend/app/api/v1/chats.py` — endpoints управления чатами
- `backend/alembic/versions/*_create_chats_tables.py` — миграции chat таблиц
- `frontend/src/api/chats.ts` — API-клиент чатов
- `frontend/src/features/chats/*` — список чатов и открытие диалога

## Входные данные / интерфейс
`POST /api/v1/chats/private` с `target_user_id`, `GET /api/v1/chats`, `GET /api/v1/chats/{chat_id}`. Все endpoint защищены JWT.

## Ожидаемый результат
Пользователь может создать чат с выбранным пользователем и открыть его повторно через список чатов.

## Зависимости
- `TASK_03_user_search.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
