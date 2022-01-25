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
    return price.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  } else {
    return 0;
  }
};
