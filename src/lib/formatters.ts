export function formatArea(area: number): string {
  return `${new Intl.NumberFormat("sv-SE").format(area)} m²`;
}