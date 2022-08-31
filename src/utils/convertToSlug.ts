export const convertToSlug = (term: string) =>
  term
    .toLowerCase()
    .trim()
    .replace(/ +/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
