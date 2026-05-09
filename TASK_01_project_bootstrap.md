Реализуй фичу: Project bootstrap and architecture skeleton

## Что нужно сделать
Подготовь базовый каркас backend и frontend с общей структурой каталогов, конфигурацией окружения и единым подходом к запуску. На выходе проект должен запускаться локально через Docker Compose с заглушечными health-check endpoint и стартовой страницей React.

## Файлы которые нужно создать / изменить
- `backend/app/main.py` — точка входа FastAPI и роут health-check
- `backend/pyproject.toml` — зависимости и tooling backend
- `backend/alembic.ini` — конфигурация миграций
- `frontend/package.json` — зависимости и scripts frontend
- `frontend/src/main.tsx` — точка входа React приложения
- `infra/docker-compose.yml` — локальный запуск backend/frontend/postgres
- `README.md` — быстрый старт проекта

## Входные данные / интерфейс
Запуск через `docker compose up --build`. Backend должен отвечать на `GET /api/v1/health`, frontend должен открываться в браузере и показывать базовый layout.

## Ожидаемый результат
Каркас проекта готов для дальнейших фич: сервисы поднимаются, есть единая структура, локальная среда воспроизводима.

## Зависимости
Нет.

## Ограничения
- Не трогай файлы вне списка выше
- Не добавляй новые зависимости

---
После завершения фичи обнови PROGRESS.md.
