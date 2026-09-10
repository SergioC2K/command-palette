// core/app.js
// El "orquestador". Conecta domain (datos) con presentation (UI)
// y coordina el cambio de idioma. No dibuja nada de contenido
// ni contiene datos — solo coordina.

import { categories } from "../domain/commands.js";
import { renderTabs } from "../presentation/tabs.js";
import { renderCategories } from "../presentation/renderer.js";
import { t, toggleLang } from "../shared/i18n.js";

export function initApp() {
  renderStaticText();
  renderAll();
  wireLangToggle();
}

function renderAll() {
  const tabsContainer = document.getElementById("tabs");
  const categoriesContainer = document.getElementById("categories");
  renderTabs(tabsContainer, categories, categoriesContainer);
  renderCategories(categoriesContainer, categories);
}

function renderStaticText() {
  document.getElementById("prompt").textContent = t("prompt");
  document.getElementById("title").textContent = t("title");
  document.getElementById("subtitle").textContent = t("subtitle");
  document.getElementById("footer").textContent = t("footer");
  document.getElementById("lang-toggle").textContent = t("langToggle");
}

function wireLangToggle() {
  const btn = document.getElementById("lang-toggle");
  btn.addEventListener("click", () => {
    toggleLang();
    renderStaticText();
    renderAll();
  });
}
