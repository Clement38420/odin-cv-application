export function getElementPosition(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  }
}
