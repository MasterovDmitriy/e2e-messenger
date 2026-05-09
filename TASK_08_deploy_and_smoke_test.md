Реализуй фичу: Docker deploy and 3-user readiness scenario

## Что нужно сделать
Подготовь production-ready docker конфигурацию и инструкции деплоя на Render или Railway. Добавь smoke-сценарий, который проверяет ключевой критерий готовности: три пользователя регистрируются, находят друг друга, открывают чаты и обмениваются зашифрованными сообщениями.

## Файлы которые нужно создать / изменить
- `infra/docker-compose.prod.yml` — production compose сборка
- `infra/render.yaml` — deployment манифест для Render
- `backend/tests/integration/test_three_users_flow.py` — интеграционный сценарий
- `docs/deploy.md` — шаги деплоя и переменные окружения
- `docs/smoke-test.md` — ручной и автоматический smoke checklist

## Входные данные / интерфейс
Запуск теста `pytest backend/tests/integration/test_three_users_flow.py`. Деплой через Render blueprint или ручной запуск Docker образов.

## Ожидаемый результат
Проект разворачивается в контейнерах, а критерий готовности подтверждается автоматическим тестом и чеклистом.

## Зависимости
- `TASK_07_message_history.md`

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
