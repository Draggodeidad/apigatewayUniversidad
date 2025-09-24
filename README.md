# API Gateway

API Gateway para arquitectura de microservicios construido con NestJS.

## 🚀 Fase 0 - Bootstrap Completado

### ✅ Características Implementadas

- **Estructura de carpetas** organizada según especificaciones
- **Configuración con dotenv** y @nestjs/config
- **Endpoint de healthcheck** en `GET /api/v1/health`
- **CORS** habilitado globalmente
- **Swagger/OpenAPI** disponible en `/api/docs`
- **Validación global** con ValidationPipe
- **Prefijo global** `/api/v1`

### 📁 Estructura del Proyecto

```
src/
├── main.ts
├── app.module.ts
├── common/                    # Utilidades compartidas
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   ├── middlewares/
│   ├── pipes/
│   └── utils/
├── config/                    # Archivos de configuración
│   ├── app.config.ts
│   ├── services.config.ts
│   └── index.ts
├── gateway/                   # Capa GraphQL
│   ├── resolvers/
│   ├── schemas/
│   └── dto/
├── services/                  # Comunicación con microservicios
│   ├── clients/
│   ├── federation/
│   └── cache/
├── auth/                      # Autenticación y autorización
├── monitoring/                # Salud, métricas, logging
│   ├── health/
│   ├── metrics/
│   └── logging/
└── types/                     # Definiciones TypeScript
    ├── graphql.ts
    └── common.types.ts
```

### 🛠️ Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Instalar dependencias adicionales para Fase 0:

```bash
npm i @nestjs/config @nestjs/swagger swagger-ui-express dotenv pino pino-http cors
npm i -D pino-pretty
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

4. Ejecutar en modo desarrollo:

```bash
npm run start:dev
```

### 📚 Endpoints Disponibles

- **Health Check**: `GET /api/v1/health`
- **Documentación Swagger**: `GET /api/docs`
- **Endpoint principal**: `GET /api/v1/`

### 🔧 Variables de Entorno

```env
# Configuración de la aplicación
PORT=3000
NODE_ENV=development
API_PREFIX=api/v1

# Configuración de servicios
USER_SERVICE_URL=http://localhost:3001
USER_SERVICE_TIMEOUT=5000
PRODUCT_SERVICE_URL=http://localhost:3002
PRODUCT_SERVICE_TIMEOUT=5000
```

### 📋 Próximas Fases

- **Fase 1**: Implementación de autenticación JWT
- **Fase 2**: Integración con microservicios
- **Fase 3**: Implementación de GraphQL
- **Fase 4**: Sistema de caché con Redis
- **Fase 5**: Métricas y logging avanzado

## Scripts Disponibles

```bash
# desarrollo
npm run start:dev

# producción
npm run start:prod

# tests
npm run test
npm run test:e2e

# linting y formato
npm run lint
npm run format
```

## Tecnologías

- **NestJS** - Framework Node.js
- **TypeScript** - Lenguaje de programación
- **Swagger/OpenAPI** - Documentación de API
- **dotenv** - Gestión de variables de entorno
- **CORS** - Cross-Origin Resource Sharing
