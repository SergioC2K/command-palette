// presentation/renderer.js
// Sabe CÓMO pintar los datos (domain) en el DOM. No sabe de dónde
// vienen los datos ni cómo funcionan las pestañas — solo dibuja.

import { el } from "../shared/dom.js";
import { copyToClipboard } from "../shared/clipboard.js";
import { getLang } from "../shared/i18n.js";
import { rowTemplate } from "../../templates/row.template.js";

export function renderCategories(container, categories) {
  container.innerHTML = "";
  const lang = getLang();

  categories.forEach((category) => {
    const categoryEl = el("div", {
      class: "category",
      dataset: { group: category.id },
    });

    categoryEl.appendChild(el("h2", {}, category.name));

    const list = el("ul", { class: "list" });

    category.items.forEach((item) => {
      const desc = item.desc[lang] ?? item.desc.es;
      const row = el("li", { class: "row" }, rowTemplate({ cmd: item.cmd, desc }));
      wireCopyButton(row, item.cmd);
      list.appendChild(row);
    });

    categoryEl.appendChild(list);
    container.appendChild(categoryEl);
  });
}

function wireCopyButton(row, cmdText) {
  const button = row.querySelector("button.copy");
  button.addEventListener("click", async () => {
    await copyToClipboard(cmdText);
    button.classList.add("copied");
    setTimeout(() => button.classList.remove("copied"), 1200);
  });
}
