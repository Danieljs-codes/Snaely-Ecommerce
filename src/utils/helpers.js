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

export function formatDateRelativeToToday(date, countryCode) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const today = new Date();
  const timeDifference = today - date;
  const daysAgo = Math.floor(timeDifference / oneDay);

  if (daysAgo >= 1 && daysAgo <= 30) {
    try {
      const formattedDate = new Intl.DateTimeFormat(countryCode, {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
      }).format(date);
      return `${daysAgo} days ago (${formattedDate})`;
    } catch (error) {
      // If country code is not recognized or invalid, fall back to ISO 8601 format
      return `${daysAgo} days ago (${date.toISOString().substring(0, 10)})`;
    }
  } else if (daysAgo === 0) {
    // If date is not within the desired range, return a regular formatted date
    return 'Today';
  } else {
    return date.toLocaleDateString();
  }
}
