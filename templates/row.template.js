// templates/row.template.js
// La "plantilla" visual de una fila. Si mañana cambias el markup
// de una fila, solo tocas este archivo — nada más se entera.

import { copyIconSVG, checkIconSVG } from "../js/shared/icons.js";
import { t } from "../js/shared/i18n.js";

export function rowTemplate({ cmd, desc }) {
  return `
    <div class="info">
      <span class="cmd">${escapeHtml(cmd)}</span>
      <span class="desc">${escapeHtml(desc)}</span>
    </div>
    <button class="copy" type="button" aria-label="${t("copyLabel")}">
      ${copyIconSVG}${checkIconSVG}
    </button>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
