const locale = 'en-US';
const options = {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
};

export const priceDisplay = price => {
  if (!price) {
    return null;
  }

  const cleanPriceString = price.toString().replace('$', '');
  const parsedPrice = Number.parseFloat(cleanPriceString);

  if (parsedPrice <= 0) {
    return null;
  }

  if (Number.isInteger(parsedPrice) || parsedPrice >= 1000) {
    return Intl.NumberFormat(locale, options).format(parsedPrice);
  } else {
    return `$${parsedPrice.toFixed(2)}`;
  }
};
