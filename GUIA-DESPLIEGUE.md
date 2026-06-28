# Guía de Despliegue — Web CANVI

Guía paso a paso para ejecutar el proyecto en tu propio ordenador o publicarlo en IONOS. Cubre desde la descarga del código hasta tener el sitio completamente operativo.

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
9. [Desplegar en IONOS — Opción A: Subida por FTP (más sencilla)](#9-desplegar-en-ionos--opción-a-subida-por-ftp-más-sencilla)
10. [Desplegar en IONOS — Opción B: Deploy Now con GitHub (recomendada)](#10-desplegar-en-ionos--opción-b-deploy-now-con-github-recomendada)
11. [Desplegar la API en IONOS VPS](#11-desplegar-la-api-en-ionos-vps)
12. [Dominio personalizado en IONOS](#12-dominio-personalizado-en-ionos)
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

pnpm es el gestor de paquetes que usa este proyecto.

```bash
npm install -g pnpm
```

Para comprobar que está instalado:

```bash
pnpm --version
```

Debe mostrar algo como `9.x.x` o superior.

### FileZilla (para subir archivos por FTP a IONOS)

Si vas a usar la Opción A (FTP), descarga el cliente FTP gratuito:

Descarga desde: https://filezilla-project.org/download.php?type=client

### Git (solo para la Opción B con Deploy Now)

Descarga desde: https://git-scm.com/downloads

---

## 3. Descargar el proyecto

### Opción A: Descargar como ZIP

1. Haz clic en los tres puntos `···` del panel izquierdo o en el menú principal.
2. Selecciona **"Download as zip"** o **"Descargar como zip"**.
3. Se descargará un archivo `.zip` en tu ordenador.
4. Extrae el zip en la carpeta donde quieras tener el proyecto (por ejemplo `Documentos/canvi-web`).
5. Abre una terminal en esa carpeta.

> **Cómo abrir la terminal en la carpeta correcta:**
> - **Windows:** Entra en la carpeta con el Explorador de archivos, haz clic derecho en un área vacía y selecciona "Abrir en Terminal" o "Git Bash aquí".
> - **Mac:** Entra en la carpeta, haz clic derecho y selecciona "Nueva terminal en la carpeta".
> - **Linux:** Clic derecho → "Abrir terminal aquí".

### Opción B: Clonar con Git (si tienes el proyecto en GitHub)

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

Este comando descarga e instala todos los paquetes necesarios. Puede tardar entre 1 y 3 minutos la primera vez.

Al terminar verás algo como:

```
Done in 45s
```

> **Si aparece un error** que dice "Use pnpm instead", significa que intentaste usar `npm install`. Usa siempre `pnpm`.

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

> **Nota sobre la base de datos:** Si en el futuro activas la base de datos, también necesitarás añadir `DATABASE_URL=postgresql://...` al `.env` de la API. Por ahora no hace falta.

### Seguridad importante

Los archivos `.env` **nunca deben subirse a GitHub** ni compartirse públicamente. El proyecto ya tiene un archivo `.gitignore` que los excluye automáticamente.

---

## 6. Ejecutar en local (desarrollo)

Con las dependencias instaladas y los archivos `.env` creados, puedes arrancar el proyecto.

### Arrancar solo la web

Desde la carpeta raíz del proyecto:

```bash
pnpm --filter @workspace/canvi-web run dev
```

O desde dentro de la carpeta de la web:

```bash
cd artifacts/canvi-web
pnpm run dev
```

La terminal mostrará:

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

La API estará disponible en `http://localhost:3001`. Para comprobar que funciona:

```bash
curl http://localhost:3001/api/healthz
```

Debe responder: `{"status":"ok"}`

### Arrancar todo a la vez

Abre **dos terminales**:

- **Terminal 1:** `pnpm --filter @workspace/canvi-web run dev`
- **Terminal 2:** `pnpm --filter @workspace/api-server run dev`

> El modo desarrollo tiene **recarga automática**: cada vez que guardes un archivo, la web se actualiza en el navegador sin necesidad de reiniciar.

---

## 7. Compilar para producción

Antes de subir el proyecto a IONOS, necesitas compilarlo. Esto convierte el código fuente en archivos HTML, CSS y JavaScript optimizados listos para el servidor.

### Compilar la web

```bash
pnpm --filter @workspace/canvi-web run build
```

Los archivos compilados se generan en:

```
artifacts/canvi-web/dist/public/
```

Esta carpeta contiene todo lo que necesitas subir a IONOS. Su contenido será algo así:

```
dist/public/
├── index.html
├── assets/
│   ├── index-XXXXXX.js
│   └── index-XXXXXX.css
├── canvi-logo-completo.png
├── canvi-logo-parcial.png
└── images/
    └── ...
```

### Compilar la API (solo si la vas a usar)

```bash
pnpm --filter @workspace/api-server run build
```

Los archivos compilados se generan en: `artifacts/api-server/dist/`

---

## 8. Base de datos (opcional / futuro)

**Actualmente el sitio web no requiere base de datos.** Todo el contenido está en el archivo de traducciones.

La infraestructura de base de datos está preparada para cuando se necesite. Cuando llegue ese momento:

El proyecto usa **PostgreSQL** y **Drizzle ORM**. IONOS ofrece bases de datos **MySQL** en sus planes de alojamiento compartido. Para usar PostgreSQL con IONOS necesitarías un **VPS** o una base de datos externa como [Neon](https://neon.tech) (plan gratuito).

Pasos cuando sea necesario:

1. Crea una base de datos PostgreSQL (en Neon, Supabase, o en el VPS de IONOS)
2. Añade la variable al `.env` de la API: `DATABASE_URL=postgresql://usuario:contraseña@host:5432/nombre_db`
3. Crea las tablas: `pnpm --filter @workspace/db run push`
4. Reinicia el servidor API

---

## 9. Desplegar en IONOS — Opción A: Subida por FTP (más sencilla)

Esta opción es la más directa. Compilas el proyecto en tu ordenador y subes los archivos resultantes al servidor de IONOS usando FTP.

### Qué necesitas

- Una cuenta en IONOS con un plan de **alojamiento web** activo (Web Hosting Essential, Business, o superior)
- FileZilla instalado en tu ordenador
- Tus credenciales FTP de IONOS

### Paso 1: Obtener las credenciales FTP de IONOS

1. Entra en tu **panel de control de IONOS**: https://www.ionos.es/login
2. Ve a **"Alojamiento"** → selecciona tu contrato de alojamiento web
3. En el menú lateral busca **"FTP y SSH"** o **"Acceso FTP"**
4. Anota o copia:
   - **Servidor FTP** (algo como `home123456789.1and1-data.host`)
   - **Usuario FTP** (algo como `u123456789`)
   - **Contraseña FTP** (la que tú hayas configurado; si no la recuerdas, puedes restablecerla aquí)

### Paso 2: Preparar el archivo `.htaccess`

La web CANVI es una **Single Page Application (SPA)**: todas las URLs de la web (como `/propuestas`, `/quienes-somos`) las gestiona el propio JavaScript del navegador, no el servidor. Para que IONOS las sirva correctamente y no devuelva un error 404, necesitas un archivo de configuración especial.

Crea un archivo llamado `.htaccess` en la carpeta `artifacts/canvi-web/dist/public/` con este contenido exacto:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

Este archivo le dice al servidor de IONOS que, cuando alguien acceda a cualquier ruta (por ejemplo `/propuestas`), devuelva siempre el `index.html` y deje que la web lo gestione internamente.

> **Importante:** Si el archivo `.htaccess` no está, las páginas internas darán error 404 cuando el usuario las visite directamente o recargue la página.

### Paso 3: Compilar el proyecto

En tu terminal, desde la raíz del proyecto:

```bash
pnpm --filter @workspace/canvi-web run build
```

Verifica que se ha creado la carpeta `artifacts/canvi-web/dist/public/` y que dentro está el `index.html`.

### Paso 4: Conectar FileZilla a IONOS

1. Abre FileZilla
2. En la barra superior introduce los datos de conexión:
   - **Servidor:** el servidor FTP de IONOS (por ejemplo `home123456789.1and1-data.host`)
   - **Nombre de usuario:** tu usuario FTP de IONOS
   - **Contraseña:** tu contraseña FTP
   - **Puerto:** `21`
3. Haz clic en **"Conexión rápida"**
4. Si aparece un aviso sobre el certificado SSL, acepta el certificado del servidor IONOS

Una vez conectado, verás dos paneles:
- **Panel izquierdo:** tu ordenador
- **Panel derecho:** el servidor de IONOS

### Paso 5: Navegar a la carpeta correcta en IONOS

En el **panel derecho** (servidor de IONOS), busca la carpeta raíz web. Dependiendo de tu configuración puede llamarse:

- `public_html`
- `htdocs`
- `/`  (la raíz directamente)

Entra en esa carpeta. Es donde deben estar los archivos de la web.

> **Si ya tienes una web antigua**, haz una copia de seguridad antes de continuar. Puedes simplemente seleccionar todos los archivos del servidor y descargarlos al ordenador antes de subir los nuevos.

### Paso 6: Subir los archivos compilados

1. En el **panel izquierdo** (tu ordenador), navega hasta `artifacts/canvi-web/dist/public/`
2. Selecciona **todos los archivos y carpetas** dentro de `public/` (usa `Ctrl+A` o `Cmd+A`)
3. Haz clic derecho → **"Subir"**
4. FileZilla subirá todos los archivos al servidor

La subida puede tardar entre 1 y 5 minutos dependiendo de tu conexión.

### Paso 7: Verificar que funciona

Abre tu navegador y entra en tu dominio de IONOS. La web de CANVI debería cargarse correctamente.

Prueba también navegar a una página interna como `/propuestas` y recarga la página — si el `.htaccess` está bien configurado, no debe dar error 404.

### Actualizar la web en el futuro

Cada vez que hagas cambios y quieras publicarlos:

1. Compila de nuevo: `pnpm --filter @workspace/canvi-web run build`
2. Abre FileZilla y conéctate a IONOS
3. Sube solo los archivos que hayan cambiado, o sube todos de nuevo para mayor seguridad

---

## 10. Desplegar en IONOS — Opción B: Deploy Now con GitHub (recomendada)

**IONOS Deploy Now** es una herramienta que conecta tu repositorio de GitHub con IONOS y despliega automáticamente cada vez que subes cambios. Es la opción más cómoda a largo plazo.

> Esta opción requiere tener el código en un repositorio de GitHub y tener un plan de IONOS compatible con Deploy Now.

### Paso 1: Subir el proyecto a GitHub

Si el código aún no está en GitHub:

1. Crea una cuenta en https://github.com si no tienes una
2. Crea un repositorio nuevo (puede ser privado): **"New repository"** → nómbralo `canvi-web`
3. Desde la carpeta del proyecto en tu terminal:

```bash
git init
git add .
git commit -m "Primera versión"
git remote add origin https://github.com/tu-usuario/canvi-web.git
git push -u origin main
```

### Paso 2: Crear el archivo `.htaccess` de redirección SPA

Antes de configurar Deploy Now, crea el archivo `.htaccess` en la carpeta pública de la web para que el enrutamiento funcione correctamente:

Crea el archivo `artifacts/canvi-web/public/.htaccess` con este contenido:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

Guárdalo en `artifacts/canvi-web/public/` (no en `dist/`) para que Vite lo incluya automáticamente en cada compilación dentro de `dist/public/`.

Después, súbelo al repositorio:

```bash
git add artifacts/canvi-web/public/.htaccess
git commit -m "Añadir .htaccess para SPA routing"
git push
```

### Paso 3: Configurar IONOS Deploy Now

1. Entra en tu panel de IONOS: https://www.ionos.es/login
2. Busca **"Deploy Now"** en los productos (o ve a https://www.ionos.es/hosting/deploy-now)
3. Haz clic en **"Configurar proyecto"** o **"Conectar repositorio"**
4. Autoriza a IONOS a acceder a tu cuenta de GitHub
5. Selecciona el repositorio `canvi-web`

### Paso 4: Configurar el flujo de build

IONOS te pedirá los datos de compilación. Introduce estos valores exactos:

| Campo | Valor |
|---|---|
| **Runtime** | `Node.js` |
| **Node version** | `20` (o `18` si no está disponible el 20) |
| **Package manager** | `npm` *(IONOS no soporta pnpm nativamente, ver nota abajo)* |
| **Build command** | `npm install -g pnpm && pnpm install && pnpm --filter @workspace/canvi-web run build` |
| **Publish directory** | `artifacts/canvi-web/dist/public` |

> **Nota sobre pnpm en Deploy Now:** IONOS Deploy Now usa npm por defecto. El comando de build instala primero pnpm globalmente y luego lo usa para compilar el proyecto. Esto es normal y funciona correctamente.

### Paso 5: Configurar las variables de entorno en Deploy Now

En la sección de variables de entorno de Deploy Now, añade:

| Variable | Valor |
|---|---|
| `PORT` | `3000` |
| `BASE_PATH` | `/` |
| `NODE_ENV` | `production` |

### Paso 6: Lanzar el despliegue

Haz clic en **"Desplegar"** o **"Deploy"**. IONOS clona tu repositorio, ejecuta el build y publica los archivos automáticamente.

El primer despliegue puede tardar entre 3 y 8 minutos. Cuando termine, te dará una URL de previsualización.

### Paso 7: Actualizaciones automáticas

A partir de ahora, **cada vez que hagas un `git push` a la rama `main`**, IONOS detecta el cambio, compila de nuevo y actualiza la web automáticamente sin que tengas que hacer nada más.

El flujo de trabajo es:

```
Editas el código → git push → IONOS compila automáticamente → Web actualizada
```

---

## 11. Desplegar la API en IONOS VPS

El alojamiento web estándar de IONOS **no puede ejecutar servidores Node.js** de forma permanente. Para la API necesitas un **VPS (Servidor Virtual Privado)** de IONOS.

> **Nota:** Actualmente la API solo tiene el endpoint de salud (`/api/healthz`) y la web funciona perfectamente sin ella. Solo necesitas este paso si quieres activar el formulario de contacto u otras funciones de backend.

### Contratar un VPS en IONOS

1. Ve a https://www.ionos.es/servidores/vps
2. El plan **VPS S** (el más básico, desde ~2€/mes) es suficiente para empezar
3. Selecciona **Ubuntu 22.04** como sistema operativo al contratar

### Configurar el VPS

Una vez contratado, IONOS te dará la **IP del servidor** y las credenciales de acceso SSH. Conéctate desde tu terminal:

```bash
ssh root@TU_IP_DEL_VPS
```

Introduce la contraseña que te proporcionó IONOS.

### Instalar Node.js en el VPS

```bash
# Actualizar el sistema
apt update && apt upgrade -y

# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verificar instalación
node --version   # debe mostrar v20.x.x

# Instalar pnpm
npm install -g pnpm

# Instalar PM2 (gestiona el servidor para que no se detenga)
npm install -g pm2
```

### Subir el código de la API al VPS

**Opción A — desde GitHub:**

```bash
git clone https://github.com/tu-usuario/canvi-web.git
cd canvi-web
pnpm install
pnpm --filter @workspace/api-server run build
```

**Opción B — subir los archivos compilados con SCP:**

En tu ordenador (no en el VPS), compila primero:

```bash
pnpm --filter @workspace/api-server run build
```

Luego sube la carpeta compilada al VPS:

```bash
scp -r artifacts/api-server/dist/ root@TU_IP_DEL_VPS:/var/www/canvi-api/
```

### Configurar las variables de entorno en el VPS

En el VPS, crea el archivo de entorno:

```bash
nano /var/www/canvi-api/.env
```

Con este contenido:

```env
PORT=3001
NODE_ENV=production
```

Guarda con `Ctrl+X`, luego `Y`, luego `Enter`.

### Arrancar la API con PM2

```bash
cd /var/www/canvi-api
pm2 start dist/index.mjs --name "canvi-api"
pm2 save
pm2 startup
```

El último comando (`pm2 startup`) genera un comando que debes ejecutar para que la API arranque automáticamente si el servidor se reinicia. Cópialo y ejecútalo.

### Comprobar que la API funciona

```bash
curl http://localhost:3001/api/healthz
```

Debe responder: `{"status":"ok"}`

Desde el exterior (en tu navegador o terminal local):

```bash
curl http://TU_IP_DEL_VPS:3001/api/healthz
```

### Comandos útiles de PM2

| Qué hacer | Comando |
|---|---|
| Ver estado de la API | `pm2 status` |
| Ver logs en tiempo real | `pm2 logs canvi-api` |
| Reiniciar la API | `pm2 restart canvi-api` |
| Detener la API | `pm2 stop canvi-api` |
| Actualizar tras nuevos cambios | `pm2 restart canvi-api` |

---

## 12. Dominio personalizado en IONOS

Si tienes o quieres contratar un dominio propio (por ejemplo `canvi-uji.es`) para que la web no use la URL genérica de IONOS:

### Si el dominio ya está en IONOS

IONOS asigna el dominio al alojamiento automáticamente al contratarlo en el mismo paquete. En el panel de control:

1. Ve a **"Dominios y SSL"**
2. Selecciona tu dominio
3. En **"Destino"**, asegúrate de que apunta a tu paquete de alojamiento web

### Si el dominio está en otro proveedor

Necesitas actualizar los **servidores DNS** del dominio para que apunten a IONOS. En el panel de tu proveedor de dominio actual:

1. Cambia los **Name Servers** (servidores de nombres) a los de IONOS:
   ```
   ns1066.ui-dns.com
   ns1066.ui-dns.biz
   ns1066.ui-dns.de
   ns1066.ui-dns.org
   ```
   (Los servidores exactos los encontrarás en tu panel de IONOS → Dominios → DNS)

2. El cambio de DNS puede tardar hasta **24-48 horas** en propagarse por todo internet, aunque normalmente se aplica en menos de 2 horas.

### Activar SSL/HTTPS gratuito

IONOS incluye un certificado SSL gratuito con todos sus planes de alojamiento. Para activarlo:

1. Panel de IONOS → **"Dominios y SSL"**
2. Selecciona tu dominio → **"SSL"**
3. Haz clic en **"Activar SSL"** → selecciona el certificado gratuito (Let's Encrypt o el propio de IONOS)
4. Espera entre 5 y 30 minutos a que se active

Una vez activo, la web será accesible por `https://tu-dominio.es` con el candado verde de seguridad.

---

## 13. Solución de problemas frecuentes

### La web da error 404 al entrar en páginas como /propuestas

El archivo `.htaccess` no está en el servidor o está mal configurado.

**Solución:** Asegúrate de que el archivo `.htaccess` existe en la carpeta raíz del servidor (la misma donde está `index.html`) y contiene exactamente:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

En FileZilla, los archivos que empiezan por `.` (punto) pueden estar ocultos. Para verlos: **Servidor** → **Forzar mostrar archivos ocultos**.

### La web no arranca en local: "PORT environment variable is required"

**Solución:** Crea el archivo `artifacts/canvi-web/.env` con:
```env
PORT=3000
BASE_PATH=/
```

### La web no arranca en local: "BASE_PATH environment variable is required"

**Solución:** Asegúrate de que `.env` tiene la línea `BASE_PATH=/`

### Error: "Cannot find module" o "Module not found"

**Solución:** Ejecuta desde la raíz del proyecto:
```bash
pnpm install
```

### La página carga en blanco

El `BASE_PATH` puede no estar configurado correctamente en producción.

**Solución:** En IONOS, si la web está en la raíz del dominio, `BASE_PATH` debe ser `/`. Si está en una subcarpeta (por ejemplo `tudominio.es/canvi/`), debe ser `/canvi/`.

### FileZilla no puede conectar a IONOS

- Comprueba que el servidor FTP, usuario y contraseña son correctos
- Asegúrate de que el **Puerto es 21**
- En FileZilla: **Archivo** → **Gestor de sitios** → prueba con **"FTP explícito sobre TLS"** en el tipo de cifrado

### El build falla con errores de TypeScript

Comprueba los errores con:
```bash
pnpm --filter @workspace/canvi-web run typecheck
```

El error indicará el archivo y la línea exacta del problema.

### Error de permisos con pnpm en Windows

Abre el terminal como **Administrador** y ejecuta:
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Resumen rápido

### Comandos esenciales

| Qué quiero hacer | Comando |
|---|---|
| Instalar dependencias | `pnpm install` (desde la raíz) |
| Ver la web en local | `pnpm --filter @workspace/canvi-web run dev` |
| Ver la API en local | `pnpm --filter @workspace/api-server run dev` |
| Compilar la web para subir | `pnpm --filter @workspace/canvi-web run build` |
| Compilar la API para subir | `pnpm --filter @workspace/api-server run build` |

### Flujo de publicación en IONOS (FTP)

```
1. Editar código  →  2. pnpm build  →  3. Abrir FileZilla  →  4. Subir dist/public/  →  ¡Listo!
```

### Flujo de publicación en IONOS (Deploy Now)

```
1. Editar código  →  2. git push  →  IONOS compila y publica solo  →  ¡Listo!
```

### Archivos que se suben a IONOS

Solo se sube el contenido de `artifacts/canvi-web/dist/public/` — **nunca** el código fuente completo. El código fuente es solo para desarrollo local.
