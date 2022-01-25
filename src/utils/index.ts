import { CountryPays, ReceiptCountryPay } from "types";

export const getExchangeCountryName = (payType: CountryPays) => {
  switch (payType) {
    case "USD":
      return "미국";
    case "JPY":
      return "일본";
    case "KRW":
      return "한국";
    case "PHP":
      return "필리핀";
  }
};

export const receiptCountryPays: ReceiptCountryPay[] = ["JPY", "KRW", "PHP"];

export const getLocaleString = (price?: number) => {
  if (price) {
    return parseFloat(price.toFixed(2)).toLocaleString();
  } else {
    return 0;
  }
};
