// Ícones em string (para uso no JS do modal).
// Mantém os mesmos desenhos de src/components/Icon.astro.

const paths: Record<string, string> = {
  acolhe:
    '<path d="M12 21s-7-4.5-9.5-9C1 8.5 3 5 6.5 5 8.7 5 10 6.5 12 8c2-1.5 3.3-3 5.5-3C21 5 23 8.5 21.5 12 19 16.5 12 21 12 21z"/>',
  online:
    '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  presencial: '<circle cx="12" cy="7" r="3"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>',
  familia:
    '<circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><path d="M3.5 20a4.5 4.5 0 0 1 9 0M11.5 20a4.5 4.5 0 0 1 9 0"/>',
  cerebro:
    '<path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 .5 4A2.5 2.5 0 0 0 7 17a2.5 2.5 0 0 0 2.5 2.5V4z"/><path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-.5 4A2.5 2.5 0 0 1 17 17a2.5 2.5 0 0 1-2.5 2.5V4z"/>',
  reabilitacao: '<path d="M3 12h4l2 6 4-14 2 8h6"/>',
  supervisao: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.3-4.3"/>',
  escola:
    '<path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5"/>',
};

export function renderIcon(name: string, size = 30): string {
  const d = paths[name] ?? paths.acolhe;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}
