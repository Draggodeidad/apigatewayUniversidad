# API Gateway

API Gateway para arquitectura de microservicios construido con NestJS.

## 🚀 Características Principales

- **Autenticación JWT** integrada con microservicio de auth
- **Autorización por roles** (admin, estudiante, authenticated)
- **Comunicación con microservicios** vía GraphQL y REST
- **Documentación automática** con Swagger/OpenAPI
- **Validación de datos** automática
- **CORS** habilitado para desarrollo
- **Health Check** para monitoreo
- **Estructura modular** y escalable

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias:

```bash
npm install
```

### 2. Configurar variables de entorno:

Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración de la aplicación
PORT=3333
NODE_ENV=development
API_PREFIX=api/v1

# Configuración del microservicio de autenticación
AUTH_SERVICE_URL=http://localhost:3000/graphql
AUTH_SERVICE_TIMEOUT=5000

# Configuración del microservicio de trámites
TRAMITES_SERVICE_URL=http://localhost:3050
TRAMITES_SERVICE_TIMEOUT=5000

# Configuración de Supabase (para validación JWT)
SUPABASE_URL=https://sirtkdkbqsklncyoallp.supabase.co
SUPABASE_JWKS_URL=https://sirtkdkbqsklncyoallp.supabase.co/auth/v1/.well-known/jwks.json
```

### 3. Ejecutar el proyecto:

```bash
npm run start:dev
```

El servidor estará disponible en: `http://localhost:3333/api/v1`

## 📚 Documentación de Endpoints

### 🌐 Swagger UI

Para ver la documentación completa de todos los endpoints disponibles, visita:
**http://localhost:3333/api/docs**

La documentación de Swagger incluye:

- Descripción detallada de cada endpoint
- Esquemas de request y response
- Ejemplos de uso
- Pruebas interactivas
- Información de autenticación requerida

### 📋 Endpoints Principales

#### Públicos (sin autenticación):

- `GET /api/v1/health` - Health check
- `POST /api/v1/auth/signup` - Registro de usuario
- `POST /api/v1/auth/login` - Login básico
- `POST /api/v1/auth/login-complete` - Login completo con refresh token
- `POST /api/v1/auth/refresh` - Renovar token
- `GET /api/v1/tramites` - Obtener todos los trámites
- `GET /api/v1/tramites/grouped` - Obtener trámites agrupados por categoría
- `GET /api/v1/tramites/health` - Health check del microservicio de trámites

#### Protegidos (requieren Bearer token):

- `POST /api/v1/auth/logout` - Cerrar sesión
- `GET /api/v1/auth/profile` - Perfil del usuario
- `GET /api/v1/auth/validate` - Validar token

#### Endpoints por roles:

- `GET /api/v1/auth/admin-only` - Solo administradores
- `GET /api/v1/auth/student-only` - Solo estudiantes
- `GET /api/v1/auth/authenticated-only` - Usuarios autenticados

## 🏗️ Arquitectura

### Estructura del Proyecto

```
src/
├── main.ts                    # Punto de entrada
├── app.module.ts              # Módulo principal
├── auth/                      # Módulo de autenticación
│   ├── auth.controller.ts     # Controladores REST
│   ├── auth.service.ts        # Lógica de negocio
│   ├── auth.guard.ts          # Guard de autenticación
│   └── roles.guard.ts         # Guard de autorización
├── config/                    # Configuración
│   ├── app.config.ts         # Config de la aplicación
│   └── services.config.ts    # Config de microservicios
├── monitoring/               # Monitoreo y salud
│   └── health/              # Health check
└── common/                  # Utilidades compartidas
    └── decorators/          # Decoradores personalizados
```

### Flujo de Comunicación

```
Frontend → API Gateway (Puerto 3333) → Auth Service (Puerto 3000) → Supabase
```

## 🔒 Autenticación

### Uso de tokens JWT

1. **Registro/Login**: Obtén un token JWT del endpoint de autenticación
2. **Autorización**: Incluye el token en el header de tus requests:
   ```
   Authorization: Bearer tu_jwt_token_aqui
   ```
3. **Validación**: El API Gateway valida automáticamente el token con el microservicio de auth

### Roles de usuario

- `admin` - Acceso completo
- `estudiante` - Acceso limitado a recursos de estudiante
- `authenticated` - Usuario autenticado básico

## 🚀 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run start:dev

# Producción
npm run start:prod

# Compilar
npm run build

# Tests
npm run test
npm run test:e2e

# Linting
npm run lint
npm run format
```

## 🔧 Tecnologías

- **NestJS** - Framework Node.js
- **TypeScript** - Lenguaje de programación
- **JWT** - Autenticación y autorización
- **Swagger/OpenAPI** - Documentación de API
- **Class Validator** - Validación de datos
- **Passport** - Estrategias de autenticación

## 📞 Soporte

Para más información sobre los endpoints y su uso, consulta la documentación interactiva en Swagger: **http://localhost:3333/api/docs**
