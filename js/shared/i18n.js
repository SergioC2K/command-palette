// shared/i18n.js
// Estado del idioma actual + diccionario de textos de interfaz.
// Los comandos (cmd) no se traducen porque son código real;
// solo se traducen las descripciones y los textos de UI.
//
// El idioma elegido se guarda en localStorage para que el visitante
// no tenga que volver a elegirlo en su próxima visita.

const STORAGE_KEY = "preferred-lang";

const translations = {
  es: {
    prompt: "referencia rápida",
    title: "Comandos para Desarrolladores",
    subtitle:
      "Git, Python, Docker, Kubernetes, SQL, npm y terminal — lo más usado en el día a día. Toca el ícono para copiar.",
    allTab: "Todos",
    footer: "referencia rápida de comandos · desarrollo de software",
    copyLabel: "Copiar comando",
    langToggle: "EN",
  },
  en: {
    prompt: "quick reference",
    title: "Developer Commands",
    subtitle:
      "Git, Python, Docker, Kubernetes, SQL, npm and terminal — the most used commands day to day. Tap the icon to copy.",
    allTab: "All",
    footer: "quick command reference · software development",
    copyLabel: "Copy command",
    langToggle: "ES",
  },
};

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return translations[stored] ? stored : null;
  } catch {
    // localStorage puede fallar en modo privado o si está deshabilitado.
    return null;
  }
}

function writeStoredLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Si no se puede guardar, la app sigue funcionando sin persistencia.
  }
}

let currentLang = readStoredLang() || "es";

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  writeStoredLang(lang);
}

export function toggleLang() {
  setLang(currentLang === "es" ? "en" : "es");
  return currentLang;
}

export function t(key) {
  return translations[currentLang][key] ?? key;
}
