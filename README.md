# Pedro Yavier — Portafolio

Portafolio en español de estrategia de marketing, contenido, diseño, producción y publicidad digital en Puerto Rico.

Sitio estático en HTML, CSS y JavaScript. Incluye 20 proyectos, filtros por categoría, galerías, 11 áreas de servicio, tipografía local y contacto por email.

## Archivos

- `dist/index.html`: página principal.
- `dist/app.js`: proyectos, servicios e interacciones.
- `dist/styles.css`: diseño y adaptación móvil.
- `dist/fonts.css` y `dist/assets/`: tipografía, logos, fotos y afiches.
- `netlify.toml`: configuración de publicación en Netlify.
- `.github/workflows/pages.yml`: publicación automática en GitHub Pages.

No requiere instalar dependencias, comando de compilación, variables de entorno ni base de datos.

## Publicar con Netlify

1. Crear el repositorio en GitHub y subir el contenido de esta carpeta a la rama `main`.
2. En Netlify, importar un proyecto desde GitHub y elegir el repositorio.
3. Dejar vacío el comando de compilación. El directorio de publicación es `dist` y está definido en `netlify.toml`.
4. Publicar. Los siguientes cambios en GitHub pueden actualizar el sitio automáticamente.

## Publicar con GitHub Pages

1. Subir el contenido de esta carpeta al repositorio, en `main`.
2. En Settings → Pages, elegir GitHub Actions como origen.
3. Ejecutar el flujo “Publish portfolio to GitHub Pages” en Actions. También se ejecuta cuando se actualiza `main`.

El workflow publica únicamente `dist/`. Las rutas relativas permiten usarlo tanto en un dominio como en la ruta de un repositorio de GitHub Pages.

## Revisar en tu computadora

Desde la raíz del proyecto:

```bash
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080.

## Contacto

Los botones abren un email a pedroyavier@gmail.com; no envían mensajes automáticamente.

## Créditos

Las marcas y sus logos identifican los proyectos del portafolio. No implican autoría de los logos. Los roles y períodos de colaboración se describen en cada caso. La carpeta contiene únicamente el sitio y su configuración de publicación, sin informes internos, credenciales ni archivos originales de Photoshop.

Documentación: https://docs.netlify.com/start/quickstarts/deploy-from-repository/ y https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages.
