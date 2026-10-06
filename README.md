# damemi.info

Directorio para documentar el acceso a la información pública y los datos abiertos en América Latina y el Caribe. Reúne, por país, la ley, el plazo, el recurso y los portales oficiales, y deja buscar todo el catálogo desde el navegador.

El sitio es estático. Está hecho con [Astro](https://astro.build/).

## Qué incluye

- Fichas de los países de la región: cómo presentar una solicitud, qué pasa si no responden y dónde están los datos que ya se publican.
- Un catálogo filtrable de portales de datos, compras, presupuesto, estadística y ventanillas de solicitud, más recursos regionales.
- Una guía para redactar la petición.
- Una plantilla de carta que cita la norma del país y se arma en el navegador, sin enviar el texto a un servidor.

No es asesoría legal. Los plazos y los canales hay que confirmarlos en el sitio oficial antes de presentar una solicitud.

## Desarrollo

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

El servidor de desarrollo queda en [http://127.0.0.1:4327](http://127.0.0.1:4327).

```bash
npm run build
npm run preview
```

`npm run build` genera el sitio estático en `dist/`.

## Publicar en GitHub Pages

El dominio es [https://damemi.info](https://damemi.info). El sitio se sirve en la raíz de ese dominio: `astro.config.mjs` define `site` y no define `base`.

- `public/CNAME` contiene `damemi.info`. El build lo copia a `dist/CNAME`.
- `.github/workflows/deploy.yml` instala, construye y publica el sitio en cada push a `main`.

## Dónde está el contenido

Las fichas viven en `src/data/countries/`. Cada país es un archivo que exporta `country`; hay que importarlo en `src/data/countries/index.ts`. Los recursos regionales están en `src/data/regional.ts`. La guía que alimenta el buscador está en `src/data/guide.ts`.

## Aviso

La información se cerró el 5 de octubre de 2026. Las leyes y estatutos cambian. **No es asesoría legal ni un sitio del Estado**. Toda la información esta disponible de buena fé pero sin ninguna garantía. Confirma el canal y el plazo en el portal oficial antes de presentar la solicitud.