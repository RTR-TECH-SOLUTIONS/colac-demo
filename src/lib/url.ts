/**
 * Prefixează linkurile interne cu base-ul site-ului.
 * Necesar pentru că pe GitHub Pages site-ul stă la /colac-demo/, nu la rădăcină.
 * Ancorele, tel:, mailto: și linkurile externe rămân neatinse.
 */
const base = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  const clean = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${clean}${path}`;
}
