// js/index.js
// Único punto de entrada. Lo único que hace es arrancar core/app.js
// cuando el DOM está listo.

import { initApp } from "./core/app.js";

document.addEventListener("DOMContentLoaded", initApp);
