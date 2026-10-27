const updatedDate = new Date(); // Se calcula la fecha de actualización al momento de la compilación, la última vez que se generó

export const site = {
  name: "damemi",
  domain: "damemi.info",
  url: "https://damemi.info",
  title: "damemi.info: acceso a la información pública en América Latina",
  description:
    "Directorio para pedir información pública y encontrar datos abiertos en América Latina y el Caribe: leyes, plazos, portales de solicitud y catálogos oficiales.",
  updatedLabel: new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }).format(updatedDate),
  updatedISO: updatedDate.toISOString().slice(0, 10),
};
