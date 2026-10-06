interface SearchDoc {
  id: string;
  kind: "pais" | "recurso" | "guia";
  title: string;
  href: string;
  kicker: string;
  text: string;
}

function norm(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function tokens(value: string): string[] {
  return norm(value).split(/[^a-z0-9]+/).filter(Boolean);
}

function fieldScore(value: string, query: string): number {
  const words = tokens(value);
  if (words.length === 0) return 0;
  if (words.includes(query)) return 3;
  if (words.some((word) => word.startsWith(query))) return 2;
  return 0;
}

function score(doc: SearchDoc, query: string): number {
  const q = norm(query).trim();
  if (!q) return 0;
  const title = norm(doc.title);
  const text = norm(doc.text);
  if (title === q) return 100;
  const titleHit = fieldScore(doc.title, q);
  const textHit = fieldScore(`${doc.title} ${doc.text}`, q);
  if (title.startsWith(q)) return 90;
  if (titleHit === 3) return 84;
  if (titleHit === 2) return 70;
  if (title.includes(q)) return 64;
  const parts = q.split(/\s+/).filter(Boolean);
  if (parts.length > 1 && parts.every((part) => fieldScore(`${doc.title} ${doc.text}`, part) > 0)) {
    return 40 + parts.filter((part) => fieldScore(doc.title, part) > 0).length * 8;
  }
  if (textHit === 3) return 36;
  if (textHit === 2) return 18;
  if (text.includes(q)) return 12;
  return 0;
}

function rank(docs: SearchDoc[], query: string): SearchDoc[] {
  return docs
    .map((doc) => ({ doc, score: score(doc, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title, "es"))
    .map((item) => item.doc);
}

function renderItems(docs: SearchDoc[], query: string): string {
  if (!query.trim()) {
    return `<p class="px-3 py-3 text-sm text-muted">Escribe un país, una ley, un portal o un tema.</p>`;
  }
  const hits = rank(docs, query).slice(0, 8);
  if (hits.length === 0) {
    return `<p class="px-3 py-3 text-sm text-muted">Sin coincidencias. Prueba con el nombre del país o con «contrataciones».</p>`;
  }
  return hits
    .map(
      (doc) => `
      <a class="block px-3 py-2.5 hover:bg-paper-deep focus:bg-paper-deep" href="${doc.href}">
        <span class="block font-semibold text-ink">${doc.title}</span>
        <span class="block text-xs uppercase tracking-wide text-muted">${doc.kicker}</span>
      </a>`,
    )
    .join("");
}

function renderPage(docs: SearchDoc[], query: string, target: HTMLElement) {
  const hits = query.trim() ? rank(docs, query) : [];
  if (!query.trim()) {
    target.innerHTML = `<p class="text-muted">Escribe arriba para buscar en países, portales y la guía.</p>`;
    return;
  }
  if (hits.length === 0) {
    target.innerHTML = `<p class="text-lg text-ink">No hay resultados para «${escapeHtml(query)}».</p>
      <p class="mt-2 text-muted">Prueba con un país, con el número de una ley o con un tema: presupuesto, salud, contrataciones, estadística.</p>`;
    return;
  }
  target.innerHTML = `
    <p class="text-sm text-muted">${hits.length} ${hits.length === 1 ? "resultado" : "resultados"} para «${escapeHtml(query)}»</p>
    <ul class="mt-4 divide-y divide-line border-y border-line">
      ${hits
        .map(
          (doc) => `
          <li>
            <a class="flex flex-col gap-1 py-4 hover:bg-card sm:flex-row sm:items-baseline sm:justify-between" href="${doc.href}">
              <span>
                <span class="block text-xl font-semibold text-ink">${escapeHtml(doc.title)}</span>
                <span class="text-sm text-muted">${escapeHtml(doc.kicker)}</span>
              </span>
              <span class="text-sm font-semibold text-teal">Abrir</span>
            </a>
          </li>`,
        )
        .join("")}
    </ul>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function initSearch(): void {
  const node = document.getElementById("search-index");
  if (!node?.textContent) return;
  const docs = JSON.parse(node.textContent) as SearchDoc[];

  const inputs = document.querySelectorAll<HTMLInputElement>("[data-search-input]");
  inputs.forEach((input) => {
    const panel = input.closest("[data-search-root]")?.querySelector<HTMLElement>("[data-search-panel]");
    if (!panel) return;
    const paint = () => {
      const query = input.value;
      if (!query.trim()) {
        panel.hidden = true;
        panel.innerHTML = "";
        return;
      }
      panel.hidden = false;
      panel.innerHTML = renderItems(docs, query);
    };
    input.addEventListener("input", paint);
    input.addEventListener("focus", paint);
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Node) || !input.closest("[data-search-root]")?.contains(event.target)) {
        panel.hidden = true;
      }
    });
  });

  const page = document.getElementById("buscar-results");
  const pageInput = document.querySelector<HTMLInputElement>("[data-buscar-input]");
  if (page && pageInput) {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("q") ?? "";
    pageInput.value = initial;
    const paintPage = () => {
      const query = pageInput.value;
      const url = new URL(window.location.href);
      if (query.trim()) url.searchParams.set("q", query.trim());
      else url.searchParams.delete("q");
      window.history.replaceState({}, "", url);
      renderPage(docs, query, page);
    };
    pageInput.addEventListener("input", paintPage);
    paintPage();
  }

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const typing =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement;
    if (event.key === "/" && !typing) {
      event.preventDefault();
      const visible = [...inputs].find((input) => input.getClientRects().length > 0);
      visible?.focus();
    }
    if (event.key === "Escape") {
      document.querySelectorAll<HTMLElement>("[data-search-panel]").forEach((panel) => {
        panel.hidden = true;
      });
    }
  });
}
