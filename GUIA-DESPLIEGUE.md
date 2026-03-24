# Guía de Despliegue — Web CANVI

Guía paso a paso para ejecutar el proyecto en tu propio ordenador o publicarlo en un servidor de hosting. Cubre desde la descarga del código hasta tener el sitio completamente operativo.

---

## Índice

1. [Lo que incluye el proyecto](#1-lo-que-incluye-el-proyecto)
2. [Requisitos previos](#2-requisitos-previos)
3. [Descargar el proyecto](#3-descargar-el-proyecto)
4. [Instalación de dependencias](#4-instalación-de-dependencias)
5. [Variables de entorno](#5-variables-de-entorno)
6. [Ejecutar en local (desarrollo)](#6-ejecutar-en-local-desarrollo)
7. [Compilar para producción](#7-compilar-para-producción)
8. [Base de datos (opcional / futuro)](#8-base-de-datos-opcional--futuro)
9. [Desplegar en hosting gratuito — Opción A: Netlify (web)](#9-desplegar-en-hosting-gratuito--opción-a-netlify-web)
10. [Desplegar en hosting gratuito — Opción B: Vercel (web)](#10-desplegar-en-hosting-gratuito--opción-b-vercel-web)
11. [Desplegar la API — Railway o Render](#11-desplegar-la-api--railway-o-render)
12. [Desplegar en Replit (recomendado)](#12-desplegar-en-replit-recomendado)
13. [Solución de problemas frecuentes](#13-solución-de-problemas-frecuentes)

---

## 1. Lo que incluye el proyecto

El proyecto tiene **dos partes** que funcionan de forma independiente:

| Parte | Qué es | Carpeta |
|---|---|---|
| **Web (frontend)** | La página web que ven los usuarios | `artifacts/canvi-web/` |
| **API (backend)** | Servidor que puede recibir formularios, datos, etc. | `artifacts/api-server/` |

La web puede funcionar completamente sola sin la API. La API es opcional y se usa para funciones como el formulario de contacto o futuras integraciones.

**No hay base de datos activa en este momento.** La infraestructura para añadirla está preparada, pero no es necesaria para el funcionamiento actual del sitio.

---

## 2. Requisitos previos

Antes de empezar, instala lo siguiente en tu ordenador:

### Node.js (versión 20 o superior)

Descarga desde: https://nodejs.org/es/download

- Elige la versión **LTS** (recomendada, la más estable)
- Para comprobar que está instalado, abre una terminal y ejecuta:

```bash
node --version
```

Debe mostrar algo como `v20.x.x` o superior. Este proyecto fue creado con `v24.x`.

### pnpm (gestor de paquetes)

pnpm es el gestor de paquetes que usa este proyecto (más rápido que npm).

```bash
npm install -g pnpm
```

Para comprobar que está instalado:

```bash
pnpm --version
```

Debe mostrar algo como `9.x.x` o superior.

### Git (opcional pero recomendado)

Si quieres clonar el repositorio en lugar de descargar el zip:

Descarga desde: https://git-scm.com/downloads

---

## 3. Descargar el proyecto

### Opción A: Descargar como ZIP desde Replit

1. En Replit, haz clic en los tres puntos `···` del panel izquierdo o en el menú principal.
2. Selecciona **"Download as zip"** o **"Descargar como zip"**.
3. Se descargará un archivo `.zip` en tu ordenador.
4. Extrae el zip en la carpeta donde quieras tener el proyecto (por ejemplo `Documentos/canvi-web`).
5. Abre una terminal en esa carpeta.

> **Cómo abrir la terminal en la carpeta correcta:**
> - **Windows:** Entra en la carpeta con el Explorador de archivos, haz clic derecho en un área vacía y selecciona "Abrir en Terminal" o "Git Bash aquí".
> - **Mac:** Entra en la carpeta, haz clic derecho y selecciona "Nueva terminal en la carpeta".
> - **Linux:** Clic derecho → "Abrir terminal aquí".

### Opción B: Clonar con Git

Si tienes el repositorio en GitHub u otro servicio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

---

## 4. Instalación de dependencias

Desde la carpeta raíz del proyecto (donde está el archivo `package.json` principal), ejecuta:

```bash
pnpm install
```

Este comando descarga e instala todos los paquetes necesarios para que funcione el proyecto. Puede tardar entre 1 y 3 minutos la primera vez.

Al terminar verás algo como:

```
Done in 45s
```

> **Si aparece un error** que dice "Use pnpm instead", significa que intentaste usar `npm install` en lugar de `pnpm install`. Usa siempre `pnpm`.

---

## 5. Variables de entorno

Las variables de entorno son configuraciones que el proyecto necesita para arrancar. Se definen en archivos especiales `.env`.

### Para la web (canvi-web)

Crea un archivo llamado `.env` dentro de la carpeta `artifacts/canvi-web/`:

```
artifacts/canvi-web/.env
```

Con este contenido:

```env
PORT=3000
BASE_PATH=/
NODE_ENV=development
```

| Variable | Qué hace | Valor para local |
|---|---|---|
| `PORT` | Puerto en el que arranca la web | `3000` (o cualquier número libre) |
| `BASE_PATH` | Ruta base de la web | `/` (barra sola para raíz) |
| `NODE_ENV` | Modo de ejecución | `development` en local, `production` en hosting |

### Para la API (api-server)

Crea un archivo `.env` dentro de `artifacts/api-server/`:

```
artifacts/api-server/.env
```

Con este contenido:

```env
PORT=3001
NODE_ENV=development
```

| Variable | Qué hace | Valor para local |
|---|---|---|
| `PORT` | Puerto en el que arranca la API | `3001` (diferente al de la web) |
| `NODE_ENV` | Modo de ejecución | `development` en local |

> **Nota sobre la base de datos:** Si en el futuro activas la base de datos, también necesitarás añadir `DATABASE_URL=postgresql://...` al `.env` de la API. Por ahora no hace falta.

### Seguridad importante

Los archivos `.env` **nunca deben subirse a GitHub** ni compartirse públicamente, ya que pueden contener contraseñas o claves privadas. El proyecto ya tiene un archivo `.gitignore` que los excluye automáticamente.

---

## 6. Ejecutar en local (desarrollo)

Con las dependencias instaladas y los archivos `.env` creados, puedes arrancar el proyecto.

### Arrancar solo la web

Desde la carpeta raíz del proyecto:

```bash
pnpm --filter @workspace/canvi-web run dev
```

O desde dentro de la carpeta `artifacts/canvi-web/`:

```bash
cd artifacts/canvi-web
pnpm run dev
```

La terminal mostrará algo como:

```
  VITE v6.x.x  ready in 800ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

Abre el navegador en `http://localhost:3000` para ver la web.

### Arrancar solo la API

```bash
pnpm --filter @workspace/api-server run dev
```

La API estará disponible en `http://localhost:3001`.

Para comprobar que funciona:

```bash
curl http://localhost:3001/api/healthz
```

Debe responder: `{"status":"ok"}`

### Arrancar todo a la vez

Para arrancar la web y la API simultáneamente, abre **dos terminales**:

- **Terminal 1:** `pnpm --filter @workspace/canvi-web run dev`
- **Terminal 2:** `pnpm --filter @workspace/api-server run dev`

> El modo desarrollo tiene **recarga automática**: cada vez que guardes un archivo, la web se actualiza en el navegador sin necesidad de reiniciar.

---

## 7. Compilar para producción

Antes de subir el proyecto a un hosting, necesitas compilarlo. Esto convierte el código fuente en archivos optimizados listos para el servidor.

### Compilar la web

```bash
pnpm --filter @workspace/canvi-web run build
```

Los archivos compilados se generan en: `artifacts/canvi-web/dist/public/`

Esta carpeta es todo lo que necesitas subir para publicar la web en un hosting estático.

### Compilar la API

```bash
pnpm --filter @workspace/api-server run build
```

Los archivos compilados se generan en: `artifacts/api-server/dist/`

### Compilar todo el proyecto a la vez

```bash
pnpm run build
```

---

## 8. Base de datos (opcional / futuro)

**Actualmente el sitio web no requiere base de datos.** Todo el contenido (textos, noticias, propuestas) está en el archivo de traducciones.

La infraestructura de base de datos está preparada para cuando se necesite (por ejemplo, para gestionar el formulario de contacto, una lista de votantes, etc.). Cuando llegue ese momento:

### Qué sistema usa

El proyecto usa **PostgreSQL** como base de datos y **Drizzle ORM** como herramienta para gestionar las tablas.

### Cómo activar la base de datos (cuando sea necesario)

1. **Crea una base de datos PostgreSQL.** Opciones gratuitas:
   - [Neon](https://neon.tech) — recomendado, plan gratuito generoso
   - [Supabase](https://supabase.com) — plan gratuito disponible
   - [Railway](https://railway.app) — incluye PostgreSQL

2. **Obtén la URL de conexión.** Tendrá este formato:
   ```
   postgresql://usuario:contraseña@host:5432/nombre_base_de_datos
   ```

3. **Añade la variable al `.env` de la API:**
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@host:5432/nombre_base_de_datos
   ```

4. **Crea las tablas** ejecutando el esquema:
   ```bash
   pnpm --filter @workspace/db run push
   ```

5. **Reinicia el servidor API.**

### Cómo añadir una tabla nueva

Los esquemas de tablas se definen en `lib/db/src/schema/`. Cada archivo define una tabla. Ver comentarios en `lib/db/src/index.ts` para el patrón a seguir.

---

## 9. Desplegar en hosting gratuito — Opción A: Netlify (web)

Netlify es ideal para publicar la web de forma gratuita y rápida. Solo sirve la parte frontend (la página que ve el usuario), no la API.

### Pasos

1. **Crea una cuenta en** https://www.netlify.com (gratuita)

2. **Compila la web localmente:**
   ```bash
   pnpm --filter @workspace/canvi-web run build
   ```

3. **Sube la carpeta `dist/public/`** directamente a Netlify:
   - Entra en tu panel de Netlify.
   - Haz clic en **"Add new site"** → **"Deploy manually"**.
   - Arrastra y suelta la carpeta `artifacts/canvi-web/dist/public/` en la zona de subida.
   - Netlify asigna una URL automáticamente (por ejemplo `canvi-abc123.netlify.app`).

4. **Configura un dominio personalizado** (opcional):
   - En la configuración del sitio, ve a **"Domain management"**.
   - Añade tu dominio (por ejemplo `canvi-uji.es`).
   - Sigue las instrucciones para actualizar los DNS en tu proveedor de dominio.

### Variables de entorno en Netlify

Si en el futuro la web necesita variables de entorno:
- Ve a tu sitio en Netlify → **Site configuration** → **Environment variables**
- Añade las variables que necesites

### Despliegue automático desde GitHub (recomendado)

Si el proyecto está en GitHub, Netlify puede redesplegar automáticamente cada vez que hagas cambios:

1. En Netlify: **"Add new site"** → **"Import an existing project"** → Conecta tu cuenta de GitHub
2. Selecciona el repositorio
3. Configura:
   - **Base directory:** `artifacts/canvi-web`
   - **Build command:** `pnpm install && pnpm run build`
   - **Publish directory:** `artifacts/canvi-web/dist/public`
4. Añade las variables de entorno:
   - `PORT` = `3000`
   - `BASE_PATH` = `/`

---

## 10. Desplegar en hosting gratuito — Opción B: Vercel (web)

Vercel es otra opción muy popular para publicar webs. Plan gratuito muy generoso.

### Pasos

1. **Crea una cuenta en** https://vercel.com (gratuita)

2. **Instala la herramienta de Vercel en tu ordenador:**
   ```bash
   npm install -g vercel
   ```

3. **Desde la carpeta `artifacts/canvi-web/`, ejecuta:**
   ```bash
   cd artifacts/canvi-web
   vercel
   ```

4. **Responde las preguntas:**
   - "Set up and deploy?" → `Y`
   - "Which scope?" → Selecciona tu cuenta personal
   - "Link to existing project?" → `N`
   - "What's your project's name?" → `canvi-web` (o el nombre que prefieras)
   - "In which directory is your code located?" → `.` (punto, la carpeta actual)
   - "Want to modify these settings?" → `N`

5. Vercel compila y publica automáticamente. Te dará una URL como `canvi-web.vercel.app`.

### Variables de entorno en Vercel

```bash
vercel env add PORT
# Introduce el valor: 3000

vercel env add BASE_PATH
# Introduce el valor: /
```

O ve al panel web de Vercel → tu proyecto → **Settings** → **Environment Variables**.

---

## 11. Desplegar la API — Railway o Render

La API (backend) necesita un servidor que ejecute Node.js. Netlify y Vercel no son adecuados para esto; usa una de estas opciones:

### Opción A: Railway

1. **Crea una cuenta en** https://railway.app (plan gratuito disponible)
2. En el panel, haz clic en **"New Project"** → **"Deploy from GitHub repo"**
3. Selecciona tu repositorio
4. Configura el servicio:
   - **Root Directory:** `artifacts/api-server`
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm run start`
5. Añade las variables de entorno en **Variables**:
   - `PORT` = `3000` (Railway asigna el puerto automáticamente con `$PORT`)
   - `NODE_ENV` = `production`
6. Railway asigna una URL pública a tu API.

### Opción B: Render

1. **Crea una cuenta en** https://render.com (plan gratuito disponible)
2. **"New"** → **"Web Service"**
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Name:** `canvi-api`
   - **Root Directory:** `artifacts/api-server`
   - **Environment:** `Node`
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm run start`
5. Añade las variables de entorno:
   - `NODE_ENV` = `production`
6. Render asigna una URL como `canvi-api.onrender.com`

> **Nota:** En el plan gratuito de Render, el servidor se "duerme" tras 15 minutos de inactividad y tarda unos segundos en responder la primera petición. Para un sitio activo, considera el plan de pago (7$/mes) o Railway.

---

## 12. Desplegar en Replit (recomendado)

Esta es la opción más sencilla si ya tienes el proyecto en Replit, y es la que se recomienda para CANVI. Replit gestiona automáticamente los servidores, puertos y variables de entorno.

### Pasos para publicar en Replit

1. Con el proyecto abierto en Replit, haz clic en el botón **"Deploy"** (en la esquina superior derecha).
2. Replit ofrece varias modalidades de despliegue:
   - **Autoscale** (recomendado): se adapta automáticamente al tráfico
   - **Reserved VM**: servidor dedicado con recursos fijos
3. Selecciona **"Autoscale"** para empezar.
4. Revisa la configuración:
   - El **run command** ya está configurado correctamente
   - Las **variables de entorno** se copian automáticamente del entorno de desarrollo
5. Haz clic en **"Deploy"**.
6. En unos minutos el sitio estará disponible en una URL del tipo `canvi-web.replit.app`

### Dominio personalizado en Replit

Si tienes un dominio propio (por ejemplo `canvi-uji.es`):
1. Ve a la configuración del despliegue en Replit
2. Añade tu dominio en **"Custom domain"**
3. En tu proveedor de dominio (GoDaddy, Namecheap, etc.), configura un registro CNAME apuntando a la URL que te indique Replit

### Actualizar el sitio desplegado

Cada vez que hagas cambios en el código y quieras actualizarlos en producción:
1. Guarda los cambios en el editor
2. Haz clic en **"Redeploy"** en la sección de despliegue

---

## 13. Solución de problemas frecuentes

### La web no arranca: "PORT environment variable is required"

El archivo `.env` no existe o no tiene la variable `PORT`.

**Solución:** Crea el archivo `artifacts/canvi-web/.env` con el contenido:
```env
PORT=3000
BASE_PATH=/
```

### La web no arranca: "BASE_PATH environment variable is required"

Mismo problema que el anterior, falta `BASE_PATH`.

**Solución:** Asegúrate de que `.env` tiene la línea `BASE_PATH=/`

### Error: "Cannot find module" o "Module not found"

Las dependencias no están instaladas correctamente.

**Solución:** Ejecuta desde la raíz del proyecto:
```bash
pnpm install
```

### La página carga pero está en blanco

El `BASE_PATH` no está configurado correctamente.

**Solución:** En local usa `BASE_PATH=/`. En hosting, si la web está en una subcarpeta, ajusta el valor (por ejemplo `BASE_PATH=/canvi/`).

### La API no responde

Comprueba que el servidor está corriendo:
```bash
curl http://localhost:3001/api/healthz
```

Si da error de conexión, el servidor no está arrancado. Ejecútalo con:
```bash
pnpm --filter @workspace/api-server run dev
```

### Error de permisos con pnpm en Windows

Abre el terminal como **Administrador** (clic derecho → "Ejecutar como administrador") y ejecuta:
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### El build falla con errores de TypeScript

Comprueba los errores con:
```bash
pnpm --filter @workspace/canvi-web run typecheck
```

Lee el error, normalmente indica el archivo y la línea del problema.

---

## Resumen rápido

| Quiero... | Comando |
|---|---|
| Instalar todo | `pnpm install` (desde la raíz) |
| Ver la web en local | `pnpm --filter @workspace/canvi-web run dev` |
| Ver la API en local | `pnpm --filter @workspace/api-server run dev` |
| Compilar la web | `pnpm --filter @workspace/canvi-web run build` |
| Compilar la API | `pnpm --filter @workspace/api-server run build` |
| Compilar todo | `pnpm run build` (desde la raíz) |

| Hosting recomendado | Para qué | Plan gratuito |
|---|---|---|
| Replit Deploy | Web + API todo junto | Sí |
| Netlify | Solo la web | Sí |
| Vercel | Solo la web | Sí |
| Railway | API / backend | Sí (limitado) |
| Render | API / backend | Sí (con limitaciones) |
