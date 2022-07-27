npm run dev - автоматический перезапуск

DB - { username: user, password: user)
https://cloud.mongodb.com/v2/62e056034d8a504e60c8928b#metrics/replicaSet/62e0576903d00e0e527a2e2e/explorer/test/posts/find

URL: http://localhost:4000

endpoints:

POST      /api/v1/posts         - создаем новую запись
GET       /api/v1/posts         - Возвращаем существующие записи
GET       /api/v1/posts/{id}    - Возвращаем запись по Id
PUT       /api/v1/posts         - Метод для обновления полей
DELETE    /api/v1/posts/{id}    - Метод для удаления полей


Model:
{
    "author": "String",
    "title": "String",
    "content": "String"
}