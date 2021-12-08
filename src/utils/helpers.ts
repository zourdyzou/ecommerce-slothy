export const formatPrice = (number: number) => {
  // formatting the number
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return formattedNumber;
};

export const useGetUniqueValues = (data: any, type: string) => {
  let unique: string[] = data.map((item: any) => item[type]);

  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
