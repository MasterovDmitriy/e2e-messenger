Реализуй фичу: E2E crypto key exchange (RSA + AES envelope)

## Что нужно сделать
Добавь клиентскую криптографию: генерацию RSA пары на клиенте, публикацию public key на сервер и шифрование сообщений симметричным AES ключом с обёрткой ключа через RSA публичный ключ получателя. Сервер не должен получать приватные ключи или plaintext.

## Файлы которые нужно создать / изменить
- `backend/app/models/user_key.py` — хранение public key metadata
- `backend/app/schemas/keys.py` — схемы API ключей
- `backend/app/api/v1/keys.py` — endpoint загрузки/чтения public key
- `frontend/src/crypto/keypair.ts` — генерация и хранение RSA ключей
- `frontend/src/crypto/envelope.ts` — AES encrypt/decrypt + RSA wrap/unwrap
- `frontend/src/features/security/*` — инициализация ключей пользователя

## Входные данные / интерфейс
`PUT /api/v1/users/me/public-key`, `GET /api/v1/users/{id}/public-key`. Клиент формирует payload `{ciphertext, iv, wrapped_key, algorithm}` для отправки сообщений.

## Ожидаемый результат
Сообщения шифруются на клиенте до отправки, получатель расшифровывает только у себя, сервер оперирует только зашифрованными данными.

## Зависимости
- `TASK_04_private_chats.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
