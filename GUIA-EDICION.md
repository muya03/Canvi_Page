# Guía de Edición y Uso — Web CANVI

Esta guía explica cómo modificar el contenido de la web de CANVI (textos, equipo, propuestas, logros, noticias, imágenes) y cómo funciona la API del proyecto. Está pensada para que cualquier miembro del equipo pueda actualizar el sitio sin necesidad de conocimientos avanzados de programación.

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Cómo cambiar textos de la web](#2-cómo-cambiar-textos-de-la-web)
3. [Cómo cambiar los miembros del equipo](#3-cómo-cambiar-los-miembros-del-equipo)
4. [Cómo cambiar propuestas](#4-cómo-cambiar-propuestas)
5. [Cómo cambiar logros](#5-cómo-cambiar-logros)
6. [Cómo cambiar noticias](#6-cómo-cambiar-noticias)
7. [Cómo gestionar imágenes y archivos](#7-cómo-gestionar-imágenes-y-archivos)
8. [Cómo funciona la API](#8-cómo-funciona-la-api)
9. [Referencia rápida de archivos importantes](#9-referencia-rápida-de-archivos-importantes)

---

## 1. Estructura del proyecto

El proyecto está organizado en tres partes principales:

```
workspace/
├── artifacts/
│   ├── canvi-web/          → La página web (lo que ve el usuario)
│   │   ├── src/
│   │   │   ├── i18n/
│   │   │   │   └── translations.ts   ← AQUÍ están TODOS los textos
│   │   │   ├── pages/                ← Páginas individuales
│   │   │   │   ├── Home.tsx          ← Página de inicio
│   │   │   │   ├── QuienesSomosPage.tsx ← Quiénes Somos + Equipo
│   │   │   │   ├── PropuestasPage.tsx
│   │   │   │   ├── LogrosPage.tsx
│   │   │   │   ├── NoticiasPage.tsx
│   │   │   │   ├── ValoresPage.tsx
│   │   │   │   ├── UnetePage.tsx
│   │   │   │   └── ContactoPage.tsx
│   │   │   └── components/
│   │   │       └── sections/         ← Secciones reutilizables del inicio
│   │   └── public/
│   │       ├── images/               ← Imágenes de la web
│   │       ├── canvi-logo-completo.png
│   │       └── canvi-logo-parcial.png
│   └── api-server/         → El servidor API (backend)
│       └── src/
│           ├── app.ts
│           └── routes/
```

---

## 2. Cómo cambiar textos de la web

**Archivo:** `artifacts/canvi-web/src/i18n/translations.ts`

Este es **el archivo central de todos los textos** de la web. Contiene dos secciones:
- `es: { ... }` → textos en **español**
- `val: { ... }` → textos en **valenciano**

Cada texto tiene una clave única (por ejemplo `"hero.title1"`) y un valor (el texto que aparece en pantalla).

### Regla fundamental

**Siempre que cambies un texto en español, debes cambiar también su equivalente en valenciano**, y viceversa. Las claves son idénticas en ambos idiomas.

### Ejemplo: cambiar el subtítulo del hero

Busca en `translations.ts`:

```typescript
// Español (dentro de es: { ... })
"hero.subtitle": "Estudiantes para estudiantes en la Universitat Jaume I...",

// Valenciano (dentro de val: { ... })
"hero.subtitle": "Estudiants per a estudiants a la Universitat Jaume I...",
```

Cambia ambos valores por el texto que quieras.

### Mapa completo de claves de texto

| Clave | Dónde aparece |
|---|---|
| `hero.*` | Sección principal del inicio (banner) |
| `about.*` | Sección "Quiénes Somos" del inicio |
| `values.*` | Sección "Valores" |
| `proposals.*` | Sección "Propuestas" |
| `achievements.*` | Sección "Logros" |
| `news.*` | Sección "Noticias" |
| `join.*` | Sección "Únete" |
| `contact.*` | Sección "Contacto" |
| `footer.*` | Pie de página |
| `nav.*` | Menú de navegación |
| `page.about.*` | Página completa /quienes-somos |
| `page.proposals.*` | Página completa /propuestas |
| `page.logros.*` | Página completa /logros |
| `page.noticias.*` | Página completa /noticias |

---

## 3. Cómo cambiar los miembros del equipo

**Archivo:** `artifacts/canvi-web/src/pages/QuienesSomosPage.tsx`

El equipo se define en el array `teamMembers` al comienzo del archivo:

```typescript
const teamMembers = [
  {
    initials: "PI",                              // Iniciales (para el avatar)
    name: "Praise Ijeoma Iheanyi Anyanwu",       // Nombre completo
    role: "Cabeza de Lista · Candidata a Presidenta", // Cargo
    bio: "Lidera la candidatura...",             // Descripción breve
    featured: true                               // Solo para la cabeza de lista
  },
  {
    initials: "MA",
    name: "Mohamed Al Howaidi Nasralla",
    role: "Membre del Consell de l'Estudiantat",
    bio: "Impulsor del proyecto Canvi..."
  },
  // ... más miembros
];
```

### Añadir un nuevo miembro

Añade un nuevo objeto al final del array (antes del corchete de cierre `]`):

```typescript
{
  initials: "NM",
  name: "Nombre Miembro Nuevo",
  role: "Cargo en el equipo",
  bio: "Breve descripción de esta persona."
},
```

### Eliminar un miembro

Borra el bloque `{ ... },` completo de esa persona del array.

### Cambiar el orden de los miembros

Los miembros aparecen en el orden en que están en el array. Para cambiar el orden, mueve el bloque de una persona a la posición deseada dentro del array. El primero con `featured: true` siempre aparece destacado aparte.

### Los 4 delegados de centro

También hay un array separado `delegados` más abajo en el mismo archivo:

```typescript
const delegados = [
  { initials: "SP", name: "Sergi Pérez Serra",       faculty: "ESTCE", fullName: "Escola Superior de Tecnologia i Ciències Experimentals" },
  { initials: "IL", name: "Irene Llansola Rico",     faculty: "FCS",   fullName: "Facultat de Ciències de la Salut" },
  { initials: "YR", name: "Yolanda Roca Pyper",      faculty: "FCHS",  fullName: "Facultat de Ciències Humanes i Socials" },
  { initials: "AB", name: "Alexandru Cristian Butaru",faculty: "FCJE",  fullName: "Facultat de Ciències Jurídiques i Econòmiques" },
];
```

Edita este array del mismo modo para modificar los delegados de centro.

---

## 4. Cómo cambiar propuestas

**Archivo:** `artifacts/canvi-web/src/i18n/translations.ts`

Las propuestas se definen con claves `proposals.N.title` y `proposals.N.items`:

```typescript
"proposals.1.title": "Exámenes y Evaluación",
"proposals.1.items": [
  "Referéndum sobre los calendarios de exámenes finales",
  "Cambiar normativa de evaluación para ganar más derechos",
  "Aulas de estudio 24h/7 días fuera de la biblioteca",
  "Clases del 2º cuatrimestre finalizan el miércoles anterior a exámenes",
  "Tolerancia en retrasos de transporte en días de examen"
],
```

### Añadir un punto a una propuesta existente

Añade una nueva cadena de texto dentro del array `[...]` de esa propuesta:

```typescript
"proposals.1.items": [
  "Referéndum sobre los calendarios...",
  "...",
  "Nueva medida que quiero añadir"    // ← Nueva línea
],
```

### Eliminar un punto

Borra la línea del texto que quieres quitar del array.

### Cambiar el orden de los puntos

Mueve las líneas dentro del array en el orden que prefieras.

### Añadir una categoría de propuesta completamente nueva

1. Añade las claves en `es` (español):
```typescript
"proposals.5.title": "Nueva Categoría",
"proposals.5.items": [
  "Primera medida",
  "Segunda medida"
],
```
2. Añade las mismas claves en `val` (valenciano) con el texto traducido.
3. En `artifacts/canvi-web/src/pages/PropuestasPage.tsx`, añade la nueva categoría al array de propuestas de la página.

Recuerda siempre actualizar **tanto el español como el valenciano**.

---

## 5. Cómo cambiar logros

**Archivo:** `artifacts/canvi-web/src/i18n/translations.ts`

Los logros se definen con claves numeradas `achievements.N`:

```typescript
"achievements.badge": "Historial de Éxito",
"achievements.title": "Logros Conseguidos",
"achievements.desc": "En nuestra campaña de 2024...",
"achievements.1": "Apertura 24h de biblioteca adelantada",
"achievements.2": "Refuerzo de normativa de reconocimiento de créditos",
"achievements.3": "Comunicación fluida con delegaciones",
"achievements.4": "Formación de calidad para delegaciones de centro",
"achievements.5": "Mantenimiento y mejora de la Semana de Bienvenida",
```

### Añadir un nuevo logro

1. Añade `"achievements.6": "Nuevo logro conseguido"` después del último logro, en `es` y en `val`.
2. En el componente `artifacts/canvi-web/src/components/sections/Achievements.tsx`, el array que lista los logros usa `tArr("achievements")` — se genera automáticamente si los números son consecutivos.

### Cambiar el texto de un logro

Simplemente edita el valor de la clave correspondiente en `translations.ts`, tanto en `es` como en `val`.

### Eliminar un logro

Borra la línea de la clave y renumera las siguientes si es necesario (por ejemplo si borras `achievements.3`, cambia `achievements.4` por `achievements.3` y `achievements.5` por `achievements.4`).

---

## 6. Cómo cambiar noticias

**Archivo:** `artifacts/canvi-web/src/i18n/translations.ts`

Cada noticia tiene tres campos: título, fecha y descripción:

```typescript
"news.1.title": "Nueva campaña de recogida de propuestas",
"news.1.date": "15 de Octubre, 2025",
"news.1.desc": "Iniciamos una nueva fase de recogida de propuestas...",

"news.2.title": "Mejoras en el servicio de transporte",
"news.2.date": "28 de Septiembre, 2025",
"news.2.desc": "Tras nuestras reuniones con el ayuntamiento...",

"news.3.title": "Apertura extraordinaria de biblioteca",
"news.3.date": "10 de Septiembre, 2025",
"news.3.desc": "Conseguimos adelantar la apertura 24h...",
```

### Cambiar una noticia existente

Edita el título, la fecha y la descripción de la noticia que quieras modificar. Hazlo en `es` y en `val`.

### Añadir una nueva noticia

1. Añade las tres claves con el siguiente número (por ejemplo `news.4.title`, `news.4.date`, `news.4.desc`) en `es` y en `val`.
2. En `artifacts/canvi-web/src/components/sections/News.tsx`, el componente recoge las noticias automáticamente si los números son consecutivos.

### Cambiar el orden de las noticias

Para cambiar qué noticia aparece primero, simplemente intercambia los contenidos entre las claves numéricas. Por ejemplo, para que la noticia 2 aparezca primero, intercambia los valores de `news.1.*` y `news.2.*`.

---

## 7. Cómo gestionar imágenes y archivos

### Dónde se guardan las imágenes

Las imágenes de la web se almacenan en:

```
artifacts/canvi-web/public/
├── canvi-logo-completo.png    → Logo principal (con texto)
├── canvi-logo-parcial.png     → Logo sin texto (solo el símbolo)
├── favicon.svg                → Icono del navegador
└── images/
    ├── hero-bg.png            → Imagen de fondo del hero
    └── abstract-mesh.png      → Imagen decorativa
```

### Subir una imagen nueva

1. Coloca el archivo de imagen dentro de la carpeta `artifacts/canvi-web/public/images/`.
2. Nómbrala de forma descriptiva y sin espacios (usa guiones: `mi-imagen-nueva.jpg`).
3. Para usarla en un componente, referencia la ruta así:

```tsx
<img src={`${import.meta.env.BASE_URL}images/mi-imagen-nueva.jpg`} alt="Descripción" />
```

El prefijo `${import.meta.env.BASE_URL}` es obligatorio para que la ruta funcione correctamente en producción.

### Quitar una imagen

Simplemente borra el archivo de la carpeta `public/images/`. Asegúrate antes de que ningún componente la esté usando (búscala por nombre en los archivos `.tsx`).

### Cambiar el logo

- Reemplaza `canvi-logo-completo.png` con el nuevo logo manteniendo el mismo nombre de archivo.
- O sube un archivo con nombre diferente y actualiza la ruta en `artifacts/canvi-web/src/components/sections/Navbar.tsx`.

### Cambiar la imagen de fondo del hero

Reemplaza el archivo `public/images/hero-bg.png` con la nueva imagen manteniendo el mismo nombre.

### Ordenar imágenes en una galería

Si en el futuro se añade una galería, el orden se controla en el array del componente correspondiente, igual que con las noticias o propuestas — moviendo los elementos dentro del array.

### Formatos recomendados

| Uso | Formato recomendado |
|---|---|
| Fotos | `.jpg` (menor tamaño) |
| Logos, iconos | `.png` o `.svg` |
| Imágenes con transparencia | `.png` |
| Iconos simples | `.svg` |

---

## 8. Cómo funciona la API

**Directorio:** `artifacts/api-server/`

La API es un servidor en Node.js + Express que corre en paralelo a la web. Actualmente proporciona una base lista para añadir funcionalidades de backend (base de datos, envío de formularios, autenticación, etc.).

### Endpoint disponible actualmente

#### `GET /api/health`

Comprueba que el servidor está funcionando correctamente.

**Petición:**
```
GET https://[tu-dominio]/api/health
```

**Respuesta:**
```json
{
  "status": "ok"
}
```

### Estructura del servidor API

```
artifacts/api-server/src/
├── index.ts           → Punto de entrada, arranca el servidor
├── app.ts             → Configuración de Express (middlewares, CORS, rutas)
├── routes/
│   ├── index.ts       → Registra todas las rutas
│   └── health.ts      → Ruta /api/health
├── lib/
│   └── logger.ts      → Sistema de logs
└── middlewares/       → Middlewares personalizados
```

### Cómo añadir un nuevo endpoint a la API

**Paso 1:** Crea un archivo nuevo en `artifacts/api-server/src/routes/`, por ejemplo `contact.ts`:

```typescript
import { Router } from "express";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  // Aquí iría la lógica (guardar en BD, enviar email, etc.)
  res.json({ success: true, message: "Mensaje recibido" });
});

export default router;
```

**Paso 2:** Registra la nueva ruta en `artifacts/api-server/src/routes/index.ts`:

```typescript
import contactRouter from "./contact";

router.use(contactRouter);
```

**Paso 3:** Llama al endpoint desde la web en cualquier componente:

```typescript
const response = await fetch(`${import.meta.env.BASE_URL}../api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message })
});
const data = await response.json();
```

### CORS

El servidor ya tiene CORS configurado y acepta peticiones desde cualquier origen, por lo que la web puede hacer peticiones a la API sin problema.

---

## 9. Referencia rápida de archivos importantes

| Qué quiero cambiar | Archivo a editar |
|---|---|
| Cualquier texto de la web (ES/VAL) | `artifacts/canvi-web/src/i18n/translations.ts` |
| Miembros del equipo / orden | `artifacts/canvi-web/src/pages/QuienesSomosPage.tsx` |
| Propuestas | `translations.ts` → claves `proposals.*` |
| Logros | `translations.ts` → claves `achievements.*` |
| Noticias | `translations.ts` → claves `news.*` |
| Valores | `translations.ts` → claves `values.*` |
| Instagram / Email de contacto | `translations.ts` + `Contact.tsx` + `Footer.tsx` + `ContactoPage.tsx` |
| Logo | `artifacts/canvi-web/public/canvi-logo-completo.png` |
| Imágenes | `artifacts/canvi-web/public/images/` |
| Rutas de navegación | `artifacts/canvi-web/src/App.tsx` |
| Menú de navegación | `artifacts/canvi-web/src/components/sections/Navbar.tsx` |
| Pie de página | `artifacts/canvi-web/src/components/sections/Footer.tsx` |
| Añadir endpoint API | `artifacts/api-server/src/routes/` |

---

## Consejos generales

- **Siempre actualiza los dos idiomas** (`es` y `val`) al cambiar un texto.
- **No cambies las claves** (la parte antes de los dos puntos `:`), solo los valores (la parte entre comillas después de `:`).
- **Los números de propuestas/noticias/logros deben ser consecutivos** (1, 2, 3...) para que el sistema los recoja automáticamente.
- **Las imágenes deben ir en `public/`** — si se ponen en `src/`, no estarán disponibles en producción.
- **Guarda siempre los archivos** después de editar — el servidor de desarrollo recarga automáticamente los cambios.
