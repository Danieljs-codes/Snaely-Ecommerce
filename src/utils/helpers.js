export const formatCurrency = value =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export const formatBytes = (bytes, decimals = 0) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
