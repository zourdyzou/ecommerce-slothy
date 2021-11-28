export const formatPrice = (number: number) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return formattedNumber;
};

export const getUniqueValues = () => {};
