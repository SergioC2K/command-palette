// presentation/tabs.js
// Construye las pestañas a partir de las categorías (domain) y
// controla qué categoría se muestra u oculta.

import { el, qsa } from "../shared/dom.js";
import { t } from "../shared/i18n.js";

export function renderTabs(container, categories, categoriesContainer) {
  container.innerHTML = "";

  const allTab = el("button", { class: "tab active", dataset: { target: "all" } }, t("allTab"));
  container.appendChild(allTab);

  categories.forEach((category) => {
    const tab = el(
      "button",
      { class: "tab", dataset: { target: category.id } },
      category.name
    );
    container.appendChild(tab);
  });

  const tabs = qsa(".tab", container);
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      filterCategories(categoriesContainer, tab.dataset.target);
    });
  });
}

function filterCategories(categoriesContainer, target) {
  qsa(".category", categoriesContainer).forEach((cat) => {
    const show = target === "all" || cat.dataset.group === target;
    cat.classList.toggle("hidden", !show);
  });
}
