import { ChangeEvent, FC, memo } from "react";
import styled from "styled-components";
import { CountryPays } from "types";
import { getExchangeCountryName, receiptCountryPays } from "utils";

export type ColumnType =
  | "sendCountry"
  | "receiptCountry"
  | "exchangeResult"
  | "sendPriceInput";

type ExchangeColumnProps = {
  columnType: ColumnType;
  title: string;
  value: string;
  subValue?: string;
  handleChange?: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    type: ColumnType
  ) => void;
};

const ExchangeColumn: FC<ExchangeColumnProps> = ({
  columnType,
  title,
  value,
  subValue,
  handleChange,
}) => {
  let subColumn = <></>;
  switch (columnType) {
    case "sendCountry":
      subColumn = (
        <ResultText>{`${getExchangeCountryName(
          value as CountryPays
        )}(${value})`}</ResultText>
      );
      break;
    case "receiptCountry":
      subColumn = (
        <ReceiptSelectBox
          onChange={(e) => handleChange?.(e, "receiptCountry")}
          value={value}
        >
          {receiptCountryPays.map((pay) => (
            <ReceiptSelectBoxOption key={pay} value={pay}>
              {`${getExchangeCountryName(pay)}(${pay})`}
            </ReceiptSelectBoxOption>
          ))}
        </ReceiptSelectBox>
      );
      break;
    case "exchangeResult":
      subColumn = <ResultText>{value}</ResultText>;
      break;
    case "sendPriceInput":
      subColumn = (
        <>
          <SendPriceInput
            value={value}
            onChange={(e) => handleChange?.(e, "sendPriceInput")}
          />
          <SendPayText>{subValue}</SendPayText>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <Column>
      <Title>{`${title}:`}</Title>
      {subColumn}
    </Column>
  );
};

export default memo(ExchangeColumn);

const Column = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-weight: 400;
  margin-right: 10px;
  font-size: 16px;
  margin: 0 10px 0 0;
`;

const ResultText = styled.p`
  font-weight: 400;
  margin: 0;
`;

const SendPayText = styled.span``;

const ReceiptSelectBox = styled.select``;

const ReceiptSelectBoxOption = styled.option``;

const SendPriceInput = styled.input`
  margin-right: 5px;
`;
