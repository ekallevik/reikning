import moment from "moment";

export type User = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

export type FirebaseUserState = {
  user: User;
  loading: boolean;
  error: any;
};

export type IncomeCategory = "Salary" | "Financial gain" | "Gift" | "Other";

export type Income = {
  amount: number;
  description: string;
  date: any;
  source: string;
  category: IncomeCategory;
};

export const incomeConverter = {
  toFirestore: ({ amount, category, date, description, source }: Income) => {
    return {
      amount: amount,
      description: description,
      date: date.toString(),
      source: source,
      category: category,
    };
  },
  fromFirestore: (snapshot, options): Income => {
    const data = snapshot.data(options);
    return {
      amount: data.amount,
      description: data.description,
      date: Date.parse(data.date),
      source: data.source,
      category: data.category,
    };
  },
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
