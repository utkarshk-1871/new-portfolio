export const THEME_STORAGE_KEY = "portfolio-theme";

export function getThemeInitScript(): string {
  return `(function(){try{var k="${THEME_STORAGE_KEY}";var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:"light";document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}catch(e){}})();`;
}
