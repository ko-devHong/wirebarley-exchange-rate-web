export type SendCountryPay = "USD";

export type ReceiptCountryPay = "KRW" | "JPY" | "PHP";

export type CountryPays = SendCountryPay | ReceiptCountryPay;

export type APIResponse = {
  success: boolean;
  quotes: Record<string, number>;
  source: SendCountryPay;
};
