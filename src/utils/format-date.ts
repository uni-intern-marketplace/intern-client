export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('kk-KZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};