# Прогресс проекта: E2E Messenger

## Статус
Последнее обновление: 2026-05-09
Текущая фича: Username/password authentication with JWT

## Фичи
| Фича | Статус | Файлы | Примечания |
|------|--------|-------|------------|
| Project bootstrap and architecture skeleton | [x] выполнена | `backend/app/main.py`, `backend/pyproject.toml`, `backend/alembic.ini`, `frontend/package.json`, `frontend/src/main.tsx`, `infra/docker-compose.yml`, `README.md` | Поднят базовый локальный стек через Docker Compose, добавлены health-check endpoint и стартовый React layout, подтвержден локальный smoke-запуск backend/frontend |
| Username/password authentication with JWT | [ ] не начата | — | bcrypt + JWT, авторизация API |
| User search by username | [ ] не начата | — | Поиск собеседников по username |
| Private 1-to-1 chats lifecycle | [ ] не начата | — | Создание и повторное открытие личных чатов |
| E2E crypto key exchange (RSA + AES envelope) | [ ] не начата | — | Клиентская генерация и обмен ключами |
| Realtime encrypted messaging over WebSocket | [ ] не начата | — | Доставка сообщений в реальном времени |
| Encrypted message history persistence | [ ] не начата | — | Пагинация и вечное хранение ciphertext |
| Docker deploy and 3-user readiness scenario | [ ] не начата | — | Deploy + интеграционный smoke flow |

## Важные решения
- Выбран FastAPI + PostgreSQL для backend как баланс скорости разработки и масштабируемости.
- E2E шифрование реализуется на клиенте через Web Crypto API; сервер не имеет доступа к приватным ключам.
- Сообщения сохраняются исключительно как ciphertext + crypto metadata.
- Для bootstrap этапа контейнеры backend/frontend запускаются напрямую из официальных Python/Node образов с runtime-установкой зависимостей, чтобы обеспечить быстрый старт без дополнительных файлов.
- `frontend/index.html` и `frontend/package-lock.json` переведены в source control; runtime-генерация HTML удалена из Docker Compose для предсказуемого старта frontend.

## Известные проблемы
- Необходима стратегия безопасного хранения приватного ключа на клиенте (например, encrypted local storage с passphrase).
- Для горизонтального масштабирования WebSocket потребуется shared pub/sub слой (например, Redis), если нагрузка вырастет.
