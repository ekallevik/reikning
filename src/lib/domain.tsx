import moment from "moment";

export type IncomeCategory = "Salary" | "Financial gain" | "Gift" | "Other";

export type Income = {
  amount: number;
  description: string;
  date: any;
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

type AssetType =
  | "Bank Account"
  | "Loan"
  | "Stocks"
  | "Savings Account"
  | "Index fund"
  | "Active fund"
  | "Interest fund"
  | "BSU"
  | "IPS";

type Scale = "Zero" | "Very low" | "Low" | "Medium" | "High" | "Very high";

// todo: change to date?
type Balance = {
  amount: number;
  date: string;
};

export type Asset = {
  type: AssetType;
  balance: Balance;
  return: Scale;
  risk: Scale;
  comment: string;
};

const DEFAULT_ASSET = {
  type: "Bank Account",
  balance: {
    amount: 0,
    date: "",
  },
  return: "Very low",
  risk: "Zero",
  comment: "",
};

type LiabilityType =
  | "Personal debt"
  | "Consumer loan"
  | "Credit card"
  | "Car load"
  | "Mortage"
  | "Education debt";

export type Liablity = {
  type: LiabilityType;
  balance: Balance;
  interest: Scale;
  risk: Scale;
  comment: string;
};

const DEFAULT_LIABILITY = {
  type: "Personal debt",
  balance: {
    amount: 0,
    date: "",
  },
  interest: "zero",
  risk: "Very low",
};
