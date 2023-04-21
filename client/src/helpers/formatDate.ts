export function formatDate(date: Date) {
  // Date format: Jan 01, 2021
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}
