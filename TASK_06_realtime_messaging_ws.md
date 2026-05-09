Реализуй фичу: Realtime encrypted messaging over WebSocket

## Что нужно сделать
Добавь WebSocket канал для отправки и получения зашифрованных текстовых сообщений в личных чатах. Соединение должно авторизовываться через JWT и доставлять сообщения обоим участникам чата в реальном времени.

## Файлы которые нужно создать / изменить
- `backend/app/ws/connection_manager.py` — управление подключениями по пользователю/чату
- `backend/app/ws/handlers.py` — обработка событий отправки сообщений
- `backend/app/api/ws.py` — websocket endpoint
- `backend/app/models/message.py` — модель зашифрованного сообщения
- `backend/app/services/message_service.py` — валидация и сохранение ciphertext
- `frontend/src/ws/client.ts` — websocket клиент и reconnect логика
- `frontend/src/features/chat-room/*` — отправка/получение сообщений в UI

## Входные данные / интерфейс
WebSocket `ws://.../ws/chat?token=<jwt>`. Событие отправки содержит `chat_id`, `ciphertext`, `iv`, `wrapped_key`, `sent_at`.

## Ожидаемый результат
Два пользователя в одном чате видят новые сообщения сразу после отправки, при этом в трафике и БД передаются только зашифрованные поля.

## Зависимости
- `TASK_05_e2e_crypto_key_exchange.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
