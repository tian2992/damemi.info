# damemi.info

Directorio para documentar el acceso a la información pública y los datos abiertos en América Latina y el Caribe. Reúne, por país, la ley, el plazo, el recurso y los portales oficiales, y deja buscar todo el catálogo desde el navegador.

## Qué incluye

- Fichas de los países de la región: cómo presentar una solicitud, qué pasa si no responden y dónde están los datos que ya se publican.
- Un catálogo filtrable de portales de datos, compras, presupuesto, estadística y ventanillas de solicitud, más recursos regionales.
- Una guía para redactar la petición.
- Una plantilla de carta que cita la norma del país y se arma en el navegador, sin enviar el texto a un servidor.

No es asesoría legal. Los plazos y los canales hay que confirmarlos en el sitio oficial antes de presentar una solicitud.

## Como contribuir / Corregir

Puedes ayudar a mejorar una ficha, actualizar un enlace o corregir una información. Para la mayoría de los cambios no necesitas modificar la interfaz del sitio ni aprender a programar: el contenido se encuentra en archivos de datos y plantillas de Astro (HTML+React) y se actualiza automáticamente al actualizar el repositorio.

### 1. Elige el tipo de cambio

- **Corregir una ficha:** actualiza la información de un país en su archivo de datos.
- **Añadir una fuente:** registra un portal oficial o recurso relacionado en la ficha correspondiente.
- **Editar un país:** crea su ficha, registra el país en el catálogo y revisa cómo se cargan las páginas.
- **Mejorar la guía:** modifica la guía de solicitudes en `src/data/guide.ts`.
- **Algo más**: Escribe detalladamente un Issue y veremos que se puede hacer.

### 2. Crea una copia del proyecto y modifica el contenido

1. Haz una copia o fork del repositorio y crea una rama nueva.
2. Instala las dependencias con `npm install`.
3. Busca el archivo que corresponde al cambio:
   - País: `src/data/countries/<nombre-del-pais>.ts`.
   - Catálogo de países: `src/data/countries/index.ts`.
   - Recursos regionales: `src/data/regional.ts`.
   - Guía de búsqueda: `src/data/guide.ts`.
4. Edita únicamente el dato que necesitas. Si cambias un país, conserva el formato de la ficha y usa las URLs oficiales como fuente.

Para evitar errores, no escribas una ficha desde cero. Copia el archivo de un país cercano al que deseas modificar y después cambia los valores que correspondan. El tipo completo de una ficha se define en `src/data/types.ts`; si añades un campo nuevo, comprueba primero qué páginas lo consumen.

Una ficha de país debe incluir el nombre, el código ISO, la norma, el plazo, el responsable, los canales y las fuentes. Si la información cambia, indica también la fecha o la fuente que la sustente.

### 3. Registra un nuevo país si corresponde

Cuando añadas un país, debes:

1. Copiar una ficha existente y renombrar el archivo con el nombre del país.
2. Exportar la constante `country` desde ese archivo.
3. Importar esa constante en `src/data/countries/index.ts`.
4. Añadir el objeto al array `countries`.
5. Verificar que el archivo tenga un `slug` único y que la ficha sea compilable.

No es necesario escribir el objeto completo a mano: basta con adaptar una ficha existente y ajustar los campos que cambien. Si el sitio no muestra el nuevo país, revisa la importación y la entrada del array en `src/data/countries/index.ts`.

### 4. Comprueba el cambio

Si tienes la oportunidad, revisa el proceso detallado en la sección desarollo para probar tus cambios de manera local. 

### 5. Prepara la propuesta

Antes de enviar el cambio, revisa:

- La información fue confirmada en el sitio oficial o en una fuente primaria.
- El enlace y el plazo aún están vigentes.
- No se modificó `dist/`, porque esa carpeta se genera durante el build.
- El cambio está limitado a los archivos que necesitan actualizar.
- La descripción del cambio explica qué datos se corrigieron y por qué.

Al abrir una petición, incluye la fuente oficial, la fecha de consulta y cualquier limitación que conozcas. Si no puedes validar la información, indícalo claramente en la descripción.

> **Importante:** no es asesoría legal. Las leyes, plazos y canales pueden cambiar. Confirma siempre el dato en el portal oficial antes de presentar una solicitud.

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

El sitio es estático. Está hecho con [Astro](https://astro.build/).

## Dónde está el contenido

Las fichas viven en `src/data/countries/`. Cada país es un archivo que exporta `country`; hay que importarlo en `src/data/countries/index.ts`. Los recursos regionales están en `src/data/regional.ts`. La guía que alimenta el buscador está en `src/data/guide.ts`.

## Aviso

La información se cerró el 5 de octubre de 2026. Las leyes y estatutos cambian. **No es asesoría legal ni un sitio del Estado**. Toda la información esta disponible de buena fé pero sin ninguna garantía. Confirma el canal y el plazo en el portal oficial antes de presentar la solicitud.

El contenido del website damemi.info está dedicado al dominio público y no expresa ninguna garantía implicita o explícita o acuerdo legal. Licencia CC0 1.0 Universal.