import moment, { Moment } from "moment";

export type User = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

export type IncomeCategory = "Salary" | "Financial gain" | "Gift" | "Other";

export type Income = {
  amount: number;
  description: string;
  date: Moment;
  source: string;
  category: IncomeCategory;
};

export const DEFAULT_INCOME: Income = {
  amount: 0,
  description: "",
  date: moment(),
  source: "",
  category: "Salary",
};

type Scale = "Zero" | "Very low" | "Low" | "Medium" | "High" | "Very high";

export type AssetType =
  | "bank_account"
  | "savings_account"
  | "loan"
  | "stocks"
  | "index_fund"
  | "active_fund"
  | "interest_fund"
  | "BSU"
  | "IPS";

export type AssetTransaction = {
  date: string;
  amount: number;
  type: "opening" | "normal" | "financial_gain" | "interest" | "closing";
};

export type Asset = {
  id: string;
  type: AssetType;
  bank: string;
  name: string;
  transactions: AssetTransaction[];
};

type LiabilityType =
  | "Personal debt"
  | "Consumer loan"
  | "Credit card"
  | "Car loan"
  | "Mortgage"
  | "Education debt";
