interface LetterCountry {
  slug: string;
  name: string;
  letterBasis: string;
  letterWarning?: string;
  deadlineShort: string;
  requestPortalName: string;
  requestPortalUrl?: string;
  requestLanguage: "es" | "en" | "fr" | "pt";
}

function valueOf(id: string): string {
  const node = document.getElementById(id);
  if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
    return node.value.trim();
  }
  return "";
}

function orBlank(value: string, fallback: string): string {
  return value || fallback;
}

function mediumLabel(language: LetterCountry["requestLanguage"], key: string): string {
  const labels: Record<LetterCountry["requestLanguage"], Record<string, string>> = {
    es: {
      email: "correo electrónico, en formato abierto",
      link: "un enlace de descarga",
      pdf: "copia digital en PDF con texto seleccionable",
      office: "consulta en la oficina, con posibilidad de copia",
    },
    en: {
      email: "email, in an open format",
      link: "a download link",
      pdf: "a digital PDF with selectable text",
      office: "inspection at your office, with the option to copy",
    },
    fr: {
      email: "courriel, dans un format ouvert",
      link: "un lien de téléchargement",
      pdf: "une copie numérique en PDF avec texte sélectionnable",
      office: "consultation sur place, avec possibilité de copie",
    },
    pt: {
      email: "correio eletrônico, em formato aberto",
      link: "um link para download",
      pdf: "cópia digital em PDF com texto selecionável",
      office: "consulta no local, com possibilidade de cópia",
    },
  };
  return labels[language][key] ?? labels.es[key] ?? "[medio de entrega]";
}

function deadlineLabel(country: LetterCountry): string {
  if (country.slug === "brasil") return "20 dias corridos, prorrogáveis por mais 10";
  return country.deadlineShort;
}

function today(locale: string): string {
  return new Date().toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildLetter(country: LetterCountry): string {
  const place = orBlank(valueOf("lugar"), "[ciudad]");
  const name = orBlank(valueOf("nombre"), "[nombre completo]");
  const id = valueOf("identificacion");
  const contact = orBlank(valueOf("contacto"), "[correo o domicilio]");
  const authority = orBlank(valueOf("autoridad"), "[nombre de la autoridad]");
  const description = orBlank(valueOf("descripcion"), "[describe los documentos o registros, no una opinión]");
  const period = orBlank(valueOf("periodo"), "[periodo o alcance]");
  const medium = mediumLabel(country.requestLanguage, valueOf("medio"));
  const identity = id ? `${name}, identificación ${id}` : name;

  if (country.requestLanguage === "en") {
    return `${place}, ${today("en")}

${authority}
${country.name}

Subject: request for access to public information

I, ${identity}, give ${contact} as the address for notices. Under ${country.letterBasis}, I request access to the following information:

${description}

Period or scope: ${period}

Please provide the information by ${medium}. If you do not hold it, please tell me which authority does. I am not required to state the reason for this request. Please acknowledge receipt so the statutory time limit can be counted.

Sincerely,

${name}
${contact}`;
  }

  if (country.requestLanguage === "fr") {
    return `${place}, ${today("fr")}

${authority}
${country.name}

Objet : demande d'accès à des informations publiques

Je soussigné(e), ${identity}, désigne ${contact} comme moyen de notification. Sur le fondement de ${country.letterBasis}, je demande l'accès aux informations suivantes :

${description}

Période ou portée : ${period}

Je demande que la réponse me soit remise par ${medium}. Si votre service ne détient pas ces informations, je vous prie d'indiquer l'autorité compétente.

Veuillez agréer l'expression de ma considération distinguée.

${name}
${contact}`;
  }

  if (country.requestLanguage === "pt") {
    return `${place}, ${today("pt")}

${authority}
${country.name}

Assunto: pedido de acesso à informação

Eu, ${identity}, indico ${contact} para notificações. Com fundamento em ${country.letterBasis}, solicito acesso às seguintes informações:

${description}

Período ou alcance: ${period}

Peço que a entrega seja feita por ${medium}, de preferência em formato aberto e reutilizável, se a informação já existir nesse suporte. Se esse órgão não a tiver, peço que indique a autoridade competente.

Não estou obrigado(a) a declarar o motivo do pedido. Peço o protocolo, com data, para contar o prazo de ${deadlineLabel(country)}.

Atenciosamente,

${name}
${contact}`;
  }

  return `${place}, ${today("es")}

${authority}
${country.name}

Asunto: solicitud de acceso a la información pública

${identity}, con medio de notificación en ${contact}, con fundamento en ${country.letterBasis}, solicito acceso a la siguiente información:

${description}

Periodo o alcance: ${period}

Pido que la entrega se haga por ${medium}, en formato abierto y reutilizable si la información ya existe en ese soporte. Si parte de lo solicitado no obra en esa autoridad, pido que indiquen cuál dependencia la tiene.

No estoy obligado(a) a explicar el motivo de esta solicitud. Agradezco el acuse de recibo, con fecha y número, para computar el plazo de ${country.deadlineShort}.

Atentamente,

${name}
${contact}`;
}

export function initLetter(): void {
  const dataNode = document.getElementById("plantilla-data");
  const output = document.getElementById("carta");
  const warning = document.getElementById("carta-aviso");
  const meta = document.getElementById("carta-meta");
  const select = document.getElementById("pais");
  if (!dataNode?.textContent || !(output instanceof HTMLTextAreaElement) || !warning || !meta || !(select instanceof HTMLSelectElement)) {
    return;
  }
  const countries = JSON.parse(dataNode.textContent) as LetterCountry[];
  const params = new URLSearchParams(window.location.search);
  const preset = params.get("pais");
  if (preset && countries.some((country) => country.slug === preset)) {
    select.value = preset;
  }

  const paint = () => {
    const country = countries.find((item) => item.slug === select.value) ?? countries[0];
    output.value = buildLetter(country);
    warning.hidden = !country.letterWarning;
    warning.textContent = country.letterWarning ?? "";
    const portal = country.requestPortalUrl
      ? `<a class="font-semibold text-teal underline" href="${country.requestPortalUrl}">${country.requestPortalName}</a>`
      : country.requestPortalName;
    meta.innerHTML = `<span class="font-semibold text-ink">${country.deadlineShort}.</span> Canal: ${portal}. La carta se arma en tu navegador y no se envía a ningún servidor.`;
  };

  document.getElementById("carta-form")?.querySelectorAll("input, textarea, select").forEach((node) => {
    node.addEventListener("input", paint);
    node.addEventListener("change", paint);
  });

  document.getElementById("copiar")?.addEventListener("click", async () => {
    const button = document.getElementById("copiar");
    try {
      await navigator.clipboard.writeText(output.value);
      if (button) button.textContent = "Copiada";
    } catch {
      output.focus();
      output.select();
      if (button) button.textContent = "Selecciona y copia";
    }
    window.setTimeout(() => {
      if (button) button.textContent = "Copiar carta";
    }, 1800);
  });

  document.getElementById("imprimir")?.addEventListener("click", () => window.print());
  paint();
}
