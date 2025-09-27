# API Gateway

API Gateway para arquitectura de microservicios construido con NestJS.

## 🚀 Fase 0 - Bootstrap ✅ | Fase 1 - Autenticación ✅

### ✅ Características Implementadas

#### Fase 0 - Bootstrap:

- **Estructura de carpetas** organizada según especificaciones
- **Configuración con dotenv** y @nestjs/config
- **Endpoint de healthcheck** en `GET /api/v1/health`
- **CORS** habilitado globalmente
- **Swagger/OpenAPI** disponible en `/api/docs`
- **Validación global** con ValidationPipe
- **Prefijo global** `/api/v1`

#### Fase 1 - Autenticación y Seguridad:

- **JWT Authentication** integrado con microservicio de auth
- **JWKS validation** para tokens de Supabase
- **AuthGuard** global para proteger rutas
- **RolesGuard** para autorización por roles (admin, estudiante, authenticated)
- **GraphQL resolvers** para auth y userProfile
- **REST endpoints** para autenticación
- **Decoradores** para facilitar el uso (@Public, @Roles, @CurrentUser)
- **Comunicación** con microservicio de autenticación en GraphQL

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

2. Instalar dependencias adicionales (ya incluidas):

```bash
# Dependencias de autenticación
npm i @nestjs/jwt @nestjs/passport passport passport-jwt
npm i jwks-client jsonwebtoken class-validator class-transformer

# Dependencias de configuración y documentación
npm i @nestjs/config @nestjs/swagger swagger-ui-express dotenv

# Dependencias de GraphQL (opcional para futuras fases)
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express

# Tipos de desarrollo
npm i -D @types/passport-jwt @types/jsonwebtoken
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

#### Públicos (sin autenticación):

- **Health Check**: `GET /api/v1/health`
- **Documentación Swagger**: `GET /api/docs`
- **Endpoint principal**: `GET /api/v1/`
- **Login básico**: `POST /api/v1/auth/login`
- **Login completo**: `POST /api/v1/auth/login-complete`
- **Refresh token**: `POST /api/v1/auth/refresh`

#### Protegidos (requieren Bearer token):

- **Logout**: `POST /api/v1/auth/logout`
- **Perfil del usuario**: `GET /api/v1/auth/profile`
- **Perfil detallado**: `GET /api/v1/auth/profile/detailed`
- **Validar token**: `GET /api/v1/auth/validate`

#### Endpoints por roles:

- **Solo Admin**: `GET /api/v1/auth/admin-only`
- **Solo Estudiantes**: `GET /api/v1/auth/student-only`
- **Usuarios autenticados**: `GET /api/v1/auth/authenticated-only`

#### GraphQL Playground:

- **GraphQL**: `GET /graphql` (con queries de auth y userProfile)

### 🔧 Variables de Entorno

```env
# Configuración de la aplicación
PORT=3000
NODE_ENV=development
API_PREFIX=api/v1

# Configuración de servicios
AUTH_SERVICE_URL=http://localhost:3000/graphql
AUTH_SERVICE_TIMEOUT=5000
USER_SERVICE_URL=http://localhost:3001
USER_SERVICE_TIMEOUT=5000
PRODUCT_SERVICE_URL=http://localhost:3002
PRODUCT_SERVICE_TIMEOUT=5000

# Configuración de Supabase (para validación JWT)
SUPABASE_URL=https://sirtkdkbqsklncyoallp.supabase.co
SUPABASE_JWKS_URL=https://sirtkdkbqsklncyoallp.supabase.co/auth/v1/.well-known/jwks.json
```

### 📋 Próximas Fases

- **Fase 2**: Integración con más microservicios (Users, Products, etc.)
- **Fase 3**: Sistema de caché con Redis
- **Fase 4**: Rate limiting y throttling
- **Fase 5**: Métricas y logging avanzado
- **Fase 6**: Load balancing y circuit breakers

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
