Реализуй фичу: Encrypted message history persistence

## Что нужно сделать
Добавь API загрузки истории сообщений для личного чата с пагинацией и сортировкой по времени. История должна читаться из БД только в зашифрованном виде и передаваться клиенту для локальной расшифровки.

## Файлы которые нужно создать / изменить
- `backend/app/api/v1/messages.py` — endpoint истории сообщений
- `backend/app/schemas/message.py` — DTO зашифрованных сообщений
- `backend/app/services/message_history_service.py` — получение истории
- `backend/app/repositories/message_repository.py` — SQL запросы с пагинацией
- `frontend/src/api/messages.ts` — запрос истории
- `frontend/src/features/chat-room/history.ts` — загрузка и отображение истории

## Входные данные / интерфейс
`GET /api/v1/chats/{chat_id}/messages?before=<iso_dt>&limit=<int>`. Возвращаются `ciphertext`, `iv`, `wrapped_key`, `sender_id`, `created_at`.

## Ожидаемый результат
При открытии чата отображается полная история сообщений, которая хранится и передаётся только в зашифрованном виде.

## Зависимости
- `TASK_06_realtime_messaging_ws.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
