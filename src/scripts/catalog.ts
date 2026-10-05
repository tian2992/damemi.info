function norm(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function initCatalog(): void {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-resource]")];
  const query = document.querySelector<HTMLInputElement>("[data-catalog-query]");
  const country = document.querySelector<HTMLSelectElement>("[data-catalog-country]");
  const kind = document.querySelector<HTMLSelectElement>("[data-catalog-kind]");
  const count = document.querySelector<HTMLElement>("[data-catalog-count]");
  const empty = document.querySelector<HTMLElement>("[data-catalog-empty]");
  const topicBoxes = [...document.querySelectorAll<HTMLInputElement>("[data-topic-filter]")];
  if (!query || !country || !kind || !count || !empty) return;

  const blobs = new Map(
    cards.map((card) => [card, norm(`${card.dataset.blob ?? ""} ${card.textContent ?? ""}`)]),
  );

  const apply = () => {
    const q = norm(query.value.trim());
    const selectedCountry = country.value;
    const selectedKind = kind.value;
    const selectedTopics = topicBoxes.filter((box) => box.checked).map((box) => box.value);
    let visible = 0;
    for (const card of cards) {
      const topics = (card.dataset.topics ?? "").split(",").filter(Boolean);
      const matchesCountry = !selectedCountry || card.dataset.country === selectedCountry;
      const matchesKind = !selectedKind || card.dataset.kind === selectedKind;
      const matchesTopics = selectedTopics.every((topic) => topics.includes(topic));
      const matchesQuery = !q || (blobs.get(card) ?? "").includes(q);
      const show = matchesCountry && matchesKind && matchesTopics && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    }
    count.textContent = String(visible);
    empty.hidden = visible !== 0;
  };

  query.addEventListener("input", apply);
  country.addEventListener("change", apply);
  kind.addEventListener("change", apply);
  topicBoxes.forEach((box) => box.addEventListener("change", apply));
  document.querySelector("[data-catalog-reset]")?.addEventListener("click", () => {
    query.value = "";
    country.value = "";
    kind.value = "";
    topicBoxes.forEach((box) => {
      box.checked = false;
    });
    apply();
  });
}
