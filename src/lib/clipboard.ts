export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

const RECENT_KEY = "wa-recent-symbols";
const FAVORITES_KEY = "wa-favorite-symbols";
const MAX_RECENT = 20;

export function getRecentSymbols(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addRecentSymbol(symbol: string): void {
  const recent = getRecentSymbols().filter((s) => s !== symbol);
  recent.unshift(symbol);
  if (recent.length > MAX_RECENT) recent.pop();
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}

export function getFavoriteSymbols(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function toggleFavoriteSymbol(symbol: string): boolean {
  const favorites = getFavoriteSymbols();
  const index = favorites.indexOf(symbol);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return false;
  } else {
    favorites.unshift(symbol);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return true;
  }
}

export function isFavorite(symbol: string): boolean {
  return getFavoriteSymbols().includes(symbol);
}
