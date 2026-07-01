# Proyecto Final Talento Tech 2026

API REST desarrollada con Node.js y Express para gestionar productos, con autenticación JWT y almacenamiento en Firebase Firestore.

## Descripción

Este proyecto implementa un backend funcional para:

- Consultar todos los productos
- Buscar un producto por ID
- Crear productos
- Actualizar productos
- Eliminar productos
- Autenticar usuarios mediante JWT
- Proteger rutas sensibles con middleware de autenticación

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore
- JWT (jsonwebtoken)
- dotenv
- cors

## Requisitos previos

- Node.js 18 o superior
- npm
- Un proyecto de Firebase configurado
- Variables de entorno definidas en un archivo `.env`

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd TT2026_proyecto-final
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=3001
   API_KEY=tu_api_key
   AUTH_DOMAIN=tu_auth_domain
   PROJECT_ID=tu_project_id
   STORAGE_BUCKET=tu_storage_bucket
   MESSAGING_SENDER_ID=tu_messaging_sender_id
   APP_ID=tu_app_id
   JWT_SECRET=tu_secreto_jwt
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

La API estará disponible en:

```text
http://localhost:3001
```

## Endpoints disponibles

### Estado del servidor
- `GET /`

### Autenticación
- `POST /auth/login`

Credenciales de ejemplo usadas en el proyecto:
```json
{
  "email": "superSafe@email.com",
  "password": "superSafePass"
}
```

Respuesta esperada:
```json
{
  "message": "Bienvenido",
  "token": "jwt_token"
}
```

### Productos
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products/create` (requiere JWT)
- `PUT /api/products/:id` (requiere JWT)
- `DELETE /api/products/:id` (requiere JWT)

Ejemplo para crear un producto:
```bash
curl -X POST http://localhost:3001/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "Laptop",
    "price": 1200,
    "origin": "México",
    "stock": 10
  }'
```

Ejemplo para actualizar un producto:
```bash
curl -X PUT http://localhost:3001/api/products/<id> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "Laptop Gaming",
    "price": 1500,
    "origin": "México",
    "stock": 8
  }'
```

## Estructura del proyecto

```text
src/
  config/
  controllers/
  middlewares/
  models/
  routes/
  utils/
```

## Notas

- Las rutas de creación, actualización y eliminación de productos están protegidas.
- Se debe enviar el token en el encabezado `Authorization` como `Bearer <token>`.
- La información de los productos se almacena en Firebase Firestore.
